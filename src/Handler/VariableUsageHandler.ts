import { RIGHT_USAGE_SYMBOL } from "../GTMPlantConfig";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { AbstractHandler } from "./AbstractHandler";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class VariableUsageHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.variables !== undefined && container.variables.length > 0) {
            return [
                ...this.toPlantUML(...container.variables),
                ...super.handle(container),
            ];
        }
        return super.handle(container);
    }

    protected toPlantUML(...variables: IPlantUMLComposite[]): string[] {
        const usages: string[] = [];
        variables.forEach((variable: IPlantUMLComposite): void => {
            if (variable.variables === undefined || variable.variables.length === 0) {
                return;
            }
            usages.push(...variable.variables.map(
                (subVariable: IPlantUMLComposite): string =>
                    `${variable.id} ${RIGHT_USAGE_SYMBOL} ${subVariable.id}`));
        });
        return usages;
    }
}
