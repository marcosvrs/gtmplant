import { IHandler } from "../Interface/IHandler";
import { IPlantUMLComposite } from "../Interface/IPlantUMLComposite";
import { IPlantUMLContainer } from "../Interface/IPlantUMLContainer";

/**
 * The default chaining behavior can be implemented inside a base handler class.
 */
export abstract class AbstractHandler implements IHandler {
    protected nextHandler?: IHandler;

    public setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a convenient way
        return handler;
    }

    public handle(container: IPlantUMLContainer): string[] {
        if (this.nextHandler !== undefined) {
            return this.nextHandler.handle(container);
        }
        return [];
    }

    protected abstract toPlantUML(...component: IPlantUMLComposite[]): string[];
}
