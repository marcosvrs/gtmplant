import { IPlantUMLContainer } from "./IPlantUMLContainer";

/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
export interface IHandler {
    setNext(handler: IHandler): IHandler;

    handle(container: IPlantUMLContainer): string[];
}
