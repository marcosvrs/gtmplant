import { AbstractHandler } from "./AbstractHandler";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { INDENTATION } from "../GTMPlantConfig";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class VariableHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.variables !== undefined && container.variables.length > 0) {
            return [
                ...this.toPlantUML(...container.variables),
                ...super.handle(container)
            ];
        }
        return super.handle(container);
    }

    protected toPlantUML(...variables: IPlantUMLComposite[]): string[] {
        const document: string[] = [];
        variables.forEach((variable: IPlantUMLComposite): void => {
            let variablePlantUMLObjectName: string = `"${variable.name}"`;
            if (variablePlantUMLObjectName !== variable.id) {
                variablePlantUMLObjectName += ` as ${variable.id}`;
            }
            const variablePlantUMLObjectDeclaration = `class ${variablePlantUMLObjectName}<${variable.type}> << (V, green) >>`;
            if (variable.variables === undefined || variable.variables.length === 0) {
                document.push(variablePlantUMLObjectDeclaration);
                return;
            }
            document.push(`${variablePlantUMLObjectDeclaration} {`);
            document.push(`${INDENTATION}.. Variables ..`);
            document.push(...variable.variables.map((variable: IPlantUMLComposite): string => `${INDENTATION}${variable.name}`));
            document.push('}');
        });
        return document;
    }
}