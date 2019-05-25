import { AbstractHandler } from "./AbstractHandler";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { IPlantUMLTrigger } from "../Interface/IPlantUMLTrigger";
import { INDENTATION } from "../GTMPlantConfig";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class TriggerHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.triggers.length > 0) {
            return [
                ...this.toPlantUML(...container.triggers),
                ...super.handle(container)
            ];
        }
        return super.handle(container);
    }

    protected toPlantUML(...triggers: IPlantUMLTrigger[]): string[] {
        const document: string[] = [];
        triggers.forEach((trigger: IPlantUMLTrigger): void => {
            const triggerPlantUMLObjectDeclaration: string = `class "${trigger.name}" as ${trigger.id}<${trigger.type}> << (T, red) >>`;
            if (trigger.variables === undefined || trigger.variables.length === 0) {
                document.push(triggerPlantUMLObjectDeclaration);
                return;
            }
            document.push(`${triggerPlantUMLObjectDeclaration} {`);
            document.push(`${INDENTATION}.. Variables ..`);
            document.push(...trigger.variables.map((variable: IPlantUMLComposite): string => `${INDENTATION}${variable.name}`));
            document.push('}');
        });
        return document;
    }
}