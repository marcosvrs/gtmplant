import { ContainerHandler } from "../Handler/ContainerHandler";
import { TagHandler } from "../Handler/TagHandler";
import { TagVariableUsageHandler } from "../Handler/TagVariableUsageHandler";
import { TriggerHandler } from "../Handler/TriggerHandler";
import { TriggerUsageHandler } from "../Handler/TriggerUsageHandler";
import { TriggerVariableUsageHandler } from "../Handler/TriggerVariableUsageHandler";
import { VariableHandler } from "../Handler/VariableHandler";
import { VariableUsageHandler } from "../Handler/VariableUsageHandler";
import { IHandler } from "../Interface/IHandler";

export namespace HandlerFactory {
    export function createOnlyTagHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler.setNext(new TagHandler());
        return containerHandler;
    }
    export function createOnlyTriggerHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler.setNext(new TriggerHandler());
        return containerHandler;
    }
    export function createOnlyVariableHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler.setNext(new VariableHandler());
        return containerHandler;
    }
    export function createOnlyVariableWithUsageHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler.setNext(new VariableHandler()).setNext(new VariableUsageHandler());
        return containerHandler;
    }
    export function createOnlyTagAndTriggerHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TagHandler())
            .setNext(new TriggerHandler());
        return containerHandler;
    }
    export function createOnlyTagAndTriggerWithUsageHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TagHandler())
            .setNext(new TriggerHandler())
            .setNext(new TriggerUsageHandler());
        return containerHandler;
    }
    export function createOnlyTagAndVariableHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TagHandler())
            .setNext(new VariableHandler());
        return containerHandler;
    }
    export function createOnlyTagAndVariableWithUsageHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TagHandler())
            .setNext(new VariableHandler())
            .setNext(new TagVariableUsageHandler());
        return containerHandler;
    }
    export function createOnlyTriggerAndVariableHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TriggerHandler())
            .setNext(new VariableHandler());
        return containerHandler;
    }
    export function createOnlyTriggerAndVariableWithUsageHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TriggerHandler())
            .setNext(new VariableHandler())
            .setNext(new TriggerVariableUsageHandler());
        return containerHandler;
    }
    export function createOnlyComponentsHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TagHandler())
            .setNext(new TriggerHandler())
            .setNext(new VariableHandler());
        return containerHandler;
    }
    export function createAllHandler(): IHandler {
        const containerHandler: IHandler = new ContainerHandler();
        containerHandler
            .setNext(new TagHandler())
            .setNext(new TriggerHandler())
            .setNext(new VariableHandler())
            .setNext(new TriggerUsageHandler())
            .setNext(new TriggerVariableUsageHandler())
            .setNext(new TagVariableUsageHandler())
            .setNext(new VariableUsageHandler());
        return containerHandler;
    }
}
