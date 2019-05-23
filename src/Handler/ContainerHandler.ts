import { AbstractHandler } from "./AbstractHandler";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class ContainerHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        if (container.variables.length > 0) {
            return [
                '@startuml',
                ...this.toPlantUML([container]),
                ...super.handle(container),
                '@enduml'
            ];
        }
        return super.handle(container);
    }

    protected toPlantUML(container: IPlantUMLContainer[]): string[] {
        return [
            `title ${container[0].name}`,
            'legend right',
            '<color:orange>T</color> - Tag',
            '<color:red>T</color> - Trigger',
            '<color:green>V</color> - Variable',
            'end legend'
        ];
    }
}