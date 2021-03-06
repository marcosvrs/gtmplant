import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";
import { AbstractHandler } from "./AbstractHandler";

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export class ContainerHandler extends AbstractHandler {
    public handle(container: IPlantUMLContainer): string[] {
        return [
            "@startuml",
            ...this.toPlantUML(container),
            ...super.handle(container),
            "@enduml",
        ];
    }

    protected toPlantUML(...container: IPlantUMLContainer[]): string[] {
        return [
            `title ${container[0].name}`,
            "legend right",
            "<color:orange>T</color> - Tag",
            "<color:red>T</color> - Trigger",
            "<color:green>V</color> - Variable",
            "end legend",
        ];
    }
}
