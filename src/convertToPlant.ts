import os from "os";
import { ContainerVersionFactory } from "./Factory/ContainerVersionFactory";
import { HandlerFactory } from "./Factory/HandlerFactory";
import { IGTMWorkspace } from "./Interface/GTM/IGTMWorkspace";
import { ICommandOptions } from "./Interface/ICommandOptions";
import { IPlantUMLContainer } from "./Interface/IPlantUMLContainer";

// tslint:disable:max-line-length

export function convertToPlant(gtmJSON: IGTMWorkspace, options: ICommandOptions = {
    tags: true,
    triggers: true,
    usages: true,
    variables: true,
}): string {
    const containerPlantUML: IPlantUMLContainer = (new ContainerVersionFactory()).create(gtmJSON.containerVersion);
    if ((options.tags === true && options.triggers === false && options.variables === false && options.usages === false) ||
        (options.tags === true && options.triggers === false && options.variables === false && options.usages === true)) {
        return HandlerFactory.createOnlyTagHandler().handle(containerPlantUML).join(os.EOL);
    }
    if ((options.tags === false && options.triggers === true && options.variables === false && options.usages === false) ||
        (options.tags === false && options.triggers === true && options.variables === false && options.usages === true)) {
        return HandlerFactory.createOnlyTriggerHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === false && options.triggers === false && options.variables === true && options.usages === false) {
        return HandlerFactory.createOnlyVariableHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === false && options.triggers === false && options.variables === true && options.usages === true) {
        return HandlerFactory.createOnlyVariableWithUsageHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === true && options.triggers === true && options.variables === false && options.usages === false) {
        return HandlerFactory.createOnlyTagAndTriggerHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === true && options.triggers === true && options.variables === false && options.usages === true) {
        return HandlerFactory.createOnlyTagAndTriggerWithUsageHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === true && options.triggers === false && options.variables === true && options.usages === false) {
        return HandlerFactory.createOnlyTagAndVariableHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === true && options.triggers === false && options.variables === true && options.usages === true) {
        return HandlerFactory.createOnlyTagAndVariableWithUsageHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === false && options.triggers === true && options.variables === true && options.usages === false) {
        return HandlerFactory.createOnlyTriggerAndVariableHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === false && options.triggers === true && options.variables === true && options.usages === true) {
        return HandlerFactory.createOnlyTriggerAndVariableWithUsageHandler().handle(containerPlantUML).join(os.EOL);
    }
    if (options.tags === true && options.triggers === true && options.variables === true && options.usages === false) {
        return HandlerFactory.createOnlyComponentsHandler().handle(containerPlantUML).join(os.EOL);
    }
    return HandlerFactory.createAllHandler().handle(containerPlantUML).join(os.EOL);
}
