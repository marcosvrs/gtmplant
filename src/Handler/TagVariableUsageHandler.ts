import { RIGHT_USAGE_SYMBOL } from "../GTMPlantConfig";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLTag } from "../Interface/IPlantUMLTag";
import { AbstractHandler } from "./AbstractHandler";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class TagVariableUsageHandler extends AbstractHandler {
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
            if (tag.variables === undefined || tag.variables.length === 0) {
                return;
            }
            usages.push(...tag.variables.map(
                (variable: IPlantUMLComposite): string => `${tag.id} ${RIGHT_USAGE_SYMBOL} ${variable.id}`));
        });
        return usages;
    }
}
