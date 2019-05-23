import { IGTMContainerVersion } from "../Interface/GTM/IGTMContainerVersion";
import { IGTMFilter } from "../Interface/GTM/IGTMFilter";
import { IGTMList } from "../Interface/GTM/IGTMList";
import { IGTMParameter } from "../Interface/GTM/IGTMParameter";
import { IGTMTag } from "../Interface/GTM/IGTMTag";
import { IGTMTrigger } from "../Interface/GTM/IGTMTrigger";
import { IGTMVariable } from "../Interface/GTM/IGTMVariable";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { IPlantUMLTag } from "../Interface/IPlantUMLTag";
import { IPlantUMLTrigger } from "../Interface/IPlantUMLTrigger";
import { ALL_PAGES_TRIGGER, ID_PREFIX } from "../GTMPlantConfig";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";

export class ContainerVersionFactory {
    protected triggerPlantById: { [index: string]: IPlantUMLTrigger } = {
        [ALL_PAGES_TRIGGER.id]: ALL_PAGES_TRIGGER
    };
    protected variablePlantByName: { [index: string]: IPlantUMLTrigger } = {};

    public create(container: IGTMContainerVersion): IPlantUMLContainer {
        return {
            id: container.container.containerId,
            name: container.container.name,
            type: '',
            variables: this.createVariables(container.variable),
            triggers: this.createTriggers(container.trigger),
            tags: this.createTags(container.tag)
        };
    }

    protected createVariables(variables: IGTMVariable[]): IPlantUMLComposite[] {
        return variables.map((variable: IGTMVariable): IPlantUMLComposite => {
            const currentVariable: IPlantUMLComposite = {
                id: ID_PREFIX.VARIABLE + variable.variableId,
                name: variable.name,
                type: variable.type
            };
            this.variablePlantByName[variable.name] = currentVariable;
            return currentVariable;
        });
    }

    protected createTriggers(triggers: IGTMTrigger[]): IPlantUMLComposite[] {
        const plantUMLTriggers: IPlantUMLTrigger[] = triggers.map((trigger: IGTMTrigger): IPlantUMLTrigger => {
            const currentTrigger: IPlantUMLTrigger = {
                id: ID_PREFIX.TRIGGER + trigger.triggerId,
                name: trigger.name,
                type: trigger.type
            };
            if (Object.keys(this.variablePlantByName).length = 0) {
                return currentTrigger;
            }
            Object.keys(this.variablePlantByName).forEach((variableName: string): void => {
                if (trigger.filter !== undefined && trigger.filter.some(
                    (filter: IGTMFilter): boolean => filter.parameter.some((parameter: IGTMParameter): boolean => parameter.value !== undefined && parameter.value.indexOf(`{{${variableName}}}`) >= 0)
                )) {
                    if (currentTrigger.variables === undefined) {
                        currentTrigger.variables = [];
                    }
                    currentTrigger.variables.push(this.variablePlantByName[variableName]);
                }
                this.triggerPlantById[trigger.triggerId] = currentTrigger;
            });
            return currentTrigger;
        });
        plantUMLTriggers.push(ALL_PAGES_TRIGGER);
        return plantUMLTriggers;
    }

    protected createTags(tags: IGTMTag[]): IPlantUMLComposite[] {
        return tags.map((tag: IGTMTag): IPlantUMLTag => {
            const currentTag: IPlantUMLTag = {
                id: ID_PREFIX.TAG + tag.tagId,
                name: tag.name,
                type: tag.type
            };
            if (tag.firingTriggerId !== undefined) {
                tag.firingTriggerId.forEach((triggerId: string): void => {
                    if (currentTag.firingTriggers === undefined) {
                        currentTag.firingTriggers = [];
                    }
                    currentTag.firingTriggers.push(this.triggerPlantById[triggerId]);
                });
            }
            if (tag.blockingTriggerId !== undefined) {
                tag.blockingTriggerId.forEach((triggerId: string): void => {
                    if (currentTag.blockingTriggers === undefined) {
                        currentTag.blockingTriggers = [];
                    }
                    currentTag.blockingTriggers.push(this.triggerPlantById[triggerId]);
                });
            }
            if (Object.keys(this.variablePlantByName).length = 0) {
                return currentTag;
            }
            Object.keys(this.variablePlantByName).forEach((variableName: string): void => {
                if (tag.parameter !== undefined && tag.parameter.some(
                    (parameter: IGTMParameter): boolean =>
                        (parameter.value !== undefined && parameter.value.indexOf(`{{${variableName}}}`) >= 0) ||
                        (parameter.list !== undefined && (parameter.list.some((list: IGTMList): boolean => list.map.some((map: IGTMParameter): boolean => map.value !== undefined && map.value.indexOf(`{{${variableName}}}`) >= 0))))
                )) {
                    if (currentTag.variables === undefined) {
                        currentTag.variables = [];
                    }
                    currentTag.variables.push(this.variablePlantByName[variableName]);
                }
            });
            return currentTag;
        });
    }
}