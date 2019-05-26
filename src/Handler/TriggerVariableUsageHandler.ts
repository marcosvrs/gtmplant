import { RIGHT_USAGE_SYMBOL } from "../GTMPlantConfig";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLTrigger } from "../Interface/IPlantUMLTrigger";
import { AbstractHandler } from "./AbstractHandler";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class TriggerVariableUsageHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.triggers !== undefined && container.triggers.length > 0) {
            return [
                ...this.toPlantUML(...container.triggers),
                ...super.handle(container),
            ];
        }
        return super.handle(container);
    }

    protected toPlantUML(...triggers: IPlantUMLTrigger[]): string[] {
        const usages: string[] = [];
        triggers.forEach((trigger: IPlantUMLTrigger): void => {
            if (trigger.variables === undefined || trigger.variables.length === 0) {
                return;
            }
            usages.push(...trigger.variables.map(
                (variable: IPlantUMLComposite): string => `${trigger.id} ${RIGHT_USAGE_SYMBOL} ${variable.id}`));
        });
        return usages;
    }
}
