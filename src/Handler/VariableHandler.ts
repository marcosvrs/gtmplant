import { AbstractHandler } from "./AbstractHandler";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class VariableHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.variables.length > 0) {
            return [
                ...this.toPlantUML(container.variables),
                ...super.handle(container)
            ];
        }
        return super.handle(container);
    }

    protected toPlantUML(variables: IPlantUMLComposite[]): string[] {
        return variables.map((variable: IPlantUMLComposite): string => `class "${variable.name}" as ${variable.id}<${variable.type}> << (V, green) >>`);
    }
}