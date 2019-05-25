import { AbstractHandler } from "./AbstractHandler";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { IPlantUMLTag } from "../Interface/IPlantUMLTag";
import { INDENTATION } from "../GTMPlantConfig";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class TagHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.tags.length > 0) {
            return [
                ...this.toPlantUML(...container.tags),
                ...super.handle(container)
            ];
        }
        return super.handle(container);

    }

    protected toPlantUML(...tags: IPlantUMLTag[]): string[] {
        const document: string[] = [];
        tags.forEach((tag: IPlantUMLTag): void => {
            const tagPlantUMLObjectDeclaration: string = `class "${tag.name}" as ${tag.id}<${tag.type}> << (T, orange) >>`;
            if ((tag.variables === undefined || tag.variables.length === 0) &&
                (tag.firingTriggers === undefined || tag.firingTriggers.length === 0) &&
                (tag.blockingTriggers === undefined || tag.blockingTriggers.length === 0)) {
                document.push(tagPlantUMLObjectDeclaration);
                return;
            }
            document.push(`${tagPlantUMLObjectDeclaration} {`);
            if (tag.variables !== undefined && tag.variables.length > 0) {
                document.push(
                    INDENTATION + '.. Variables ..',
                    ...tag.variables
                        .map((variable: IPlantUMLComposite): string => INDENTATION + variable.name)
                )
            }
            if (tag.firingTriggers !== undefined && tag.firingTriggers.length > 0) {
                document.push(
                    INDENTATION + '.. Firing Triggers ..',
                    ...tag.firingTriggers
                        .map((firingTrigger: IPlantUMLComposite): string => INDENTATION + firingTrigger.name)
                );
            }
            if (tag.blockingTriggers !== undefined && tag.blockingTriggers.length > 0) {
                document.push(
                    INDENTATION + '.. Blocking Triggers ..',
                    ...tag.blockingTriggers
                        .map((blockingTrigger: IPlantUMLComposite): string => INDENTATION + blockingTrigger.name)
                );
            }
            document.push('}');
        });
        return document;
    }
}