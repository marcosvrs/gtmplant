import { ALL_PAGES_TRIGGER, ID_PREFIX } from "../GTMPlantConfig";
import { IGTMBuiltInVariable } from "../Interface/GTM/IGTMBuiltInVariable";
import { IGTMContainerVersion } from "../Interface/GTM/IGTMContainerVersion";
import { IGTMFilter } from "../Interface/GTM/IGTMFilter";
import { IGTMList } from "../Interface/GTM/IGTMList";
import { IGTMParameter } from "../Interface/GTM/IGTMParameter";
import { IGTMTag } from "../Interface/GTM/IGTMTag";
import { IGTMTrigger } from "../Interface/GTM/IGTMTrigger";
import { IGTMVariable } from "../Interface/GTM/IGTMVariable";
import { IDict } from "../Interface/IDict";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLTag } from "../Interface/IPlantUMLTag";

export class ContainerVersionFactory {
    protected triggerPlantById: IDict<IPlantUMLComposite> = {
        [ALL_PAGES_TRIGGER.id]: ALL_PAGES_TRIGGER,
    };
    protected variablePlantByName: IDict<IPlantUMLComposite> = {};

    public create(container: IGTMContainerVersion): IPlantUMLContainer {
        return {
            id: container.container.containerId,
            name: container.container.name,
            tags: container.tag === undefined ? container.tag : this.createTags(container.tag),
            triggers: container.trigger === undefined ? container.trigger : this.createTriggers(container.trigger),
            type: "",
            variables: [
                ...container.variable === undefined ? [] :
                    this.createVariables(container.variable),
                ...container.builtInVariable === undefined ? [] :
                    this.createBuiltInVariables(container.builtInVariable),
            ],
        };
    }

    protected createBuiltInVariables(builtInVariables: IGTMBuiltInVariable[]): IPlantUMLComposite[] {
        return builtInVariables.map((builtInVariable: IGTMBuiltInVariable): IPlantUMLComposite => {
            const currentBuiltInVariable: IPlantUMLComposite = {
                id: `"${builtInVariable.name}"`,
                name: builtInVariable.name,
                type: builtInVariable.type,
            };
            this.variablePlantByName[builtInVariable.name] = currentBuiltInVariable;
            return currentBuiltInVariable;
        });
    }

    protected createVariables(variables: IGTMVariable[]): IPlantUMLComposite[] {
        variables.forEach((variable: IGTMVariable): void => {
            this.variablePlantByName[variable.name] = {
                id: ID_PREFIX.VARIABLE + variable.variableId,
                name: variable.name,
                type: variable.type,
            };
        });

        return variables.map((variable: IGTMVariable): IPlantUMLComposite => {
            const currentVariable: IPlantUMLComposite = this.variablePlantByName[variable.name];
            if (variable.parameter === undefined || variable.parameter.length === 0) {
                return currentVariable;
            }
            Object.keys(this.variablePlantByName).forEach((variableName: string): void => {
                if (variable.parameter !== undefined && variable.parameter.some(
                    (parameter: IGTMParameter): boolean =>
                        (parameter.value !== undefined && parameter.value.indexOf(`{{${variableName}}}`) >= 0) ||
                        (parameter.list !== undefined && (parameter.list.some(
                            (list: IGTMList): boolean => list.map.some(
                                (map: IGTMParameter): boolean => map.value !== undefined &&
                                    map.value.indexOf(`{{${variableName}}}`) >= 0)))),
                )) {
                    if (currentVariable.variables === undefined) {
                        currentVariable.variables = [];
                    }
                    currentVariable.variables.push(this.variablePlantByName[variableName]);
                }
            });
            return currentVariable;
        });
    }

    protected createTriggers(triggers: IGTMTrigger[]): IPlantUMLComposite[] {
        const plantUMLTriggers: IPlantUMLComposite[] = triggers.map((trigger: IGTMTrigger): IPlantUMLComposite => {
            const currentTrigger: IPlantUMLComposite = {
                id: ID_PREFIX.TRIGGER + trigger.triggerId,
                name: trigger.name,
                type: trigger.type,
            };
            if (Object.keys(this.variablePlantByName).length === 0) {
                return currentTrigger;
            }
            Object.keys(this.variablePlantByName).forEach((variableName: string): void => {
                if (trigger.filter !== undefined && trigger.filter.some(
                    (filter: IGTMFilter): boolean => filter.parameter.some(
                        (parameter: IGTMParameter): boolean => parameter.value !== undefined &&
                            parameter.value.indexOf(`{{${variableName}}}`) >= 0),
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
                type: tag.type,
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
            if (Object.keys(this.variablePlantByName).length === 0) {
                return currentTag;
            }
            Object.keys(this.variablePlantByName).forEach((variableName: string): void => {
                if (tag.parameter !== undefined && tag.parameter.some(
                    (parameter: IGTMParameter): boolean =>
                        (parameter.value !== undefined &&
                            parameter.value.indexOf(`{{${variableName}}}`) >= 0) ||
                        (parameter.list !== undefined &&
                            (parameter.list.some(
                                (list: IGTMList): boolean => list.map.some(
                                    (map: IGTMParameter): boolean => map.value !== undefined &&
                                        map.value.indexOf(`{{${variableName}}}`) >= 0)))),
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
