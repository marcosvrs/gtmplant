import { RIGHT_USAGE_SYMBOL } from "../GTMPlantConfig";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLTag } from "../Interface/IPlantUMLTag";
import { IPlantUMLTrigger } from "../Interface/IPlantUMLTrigger";
import { AbstractHandler } from "./AbstractHandler";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class TriggerUsageHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.tags !== undefined && container.tags.length > 0) {
            return [
                ...this.toPlantUML(...container.tags),
                ...super.handle(container),
            ];
        }
        return super.handle(container);
    }

    protected toPlantUML(...tags: IPlantUMLTag[]): string[] {
        const usages: string[] = [];
        tags.forEach((tag: IPlantUMLTag): void => {
            if (tag.blockingTriggers !== undefined && tag.blockingTriggers.length > 0) {
                usages.push(...tag.blockingTriggers.map(
                    (trigger: IPlantUMLTrigger): string => `${tag.id} ${RIGHT_USAGE_SYMBOL} ${trigger.id}`));
            }
            if (tag.firingTriggers !== undefined && tag.firingTriggers.length > 0) {
                usages.push(...tag.firingTriggers.map(
                    (trigger: IPlantUMLTrigger): string => `${tag.id} ${RIGHT_USAGE_SYMBOL} ${trigger.id}`));
            }
        });
        return usages;
    }
}
