import os from "os";
import { ContainerVersionFactory } from "./Factory/ContainerVersionFactory";
import { HandlerFactory } from "./Factory/HandlerFactory";
import { IGTMWorkspace } from "./Interface/GTM/IGTMWorkspace";
import { ICommandOptions } from "./Interface/ICommandOptions";
import { IPlantUMLContainer } from "./Interface/IPlantUMLContainer";

export function convertToPlant(gtmJSON: IGTMWorkspace, options: ICommandOptions = {
    tags: true,
    triggers: true,
    usages: true,
    variables: true,
}): string {
    const containerPlantUML: IPlantUMLContainer = (new ContainerVersionFactory()).create(gtmJSON.containerVersion);
    switch (options) {
        case { tags: true, triggers: false, variables: false, usages: false }:
        case { tags: true, triggers: false, variables: false, usages: true }:
            return HandlerFactory.createOnlyTagHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: false, triggers: true, variables: false, usages: false }:
        case { tags: false, triggers: true, variables: false, usages: true }:
            return HandlerFactory.createOnlyTriggerHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: false, triggers: false, variables: true, usages: false }:
            return HandlerFactory.createOnlyVariableHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: false, triggers: false, variables: true, usages: true }:
            return HandlerFactory.createOnlyVariableWithUsageHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: true, triggers: true, variables: false, usages: false }:
            return HandlerFactory.createOnlyTagAndTriggerHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: true, triggers: true, variables: false, usages: true }:
            return HandlerFactory.createOnlyTagAndTriggerWithUsageHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: true, triggers: false, variables: true, usages: false }:
            return HandlerFactory.createOnlyTagAndVariableHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: true, triggers: false, variables: true, usages: true }:
            return HandlerFactory.createOnlyTagAndVariableWithUsageHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: false, triggers: true, variables: true, usages: false }:
            return HandlerFactory.createOnlyTriggerAndVariableHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: false, triggers: true, variables: true, usages: true }:
            return HandlerFactory.createOnlyTriggerAndVariableWithUsageHandler().handle(containerPlantUML).join(os.EOL);
        case { tags: true, triggers: true, variables: true, usages: false }:
            return HandlerFactory.createOnlyComponentsHandler().handle(containerPlantUML).join(os.EOL);
        default:
            return HandlerFactory.createAllHandler().handle(containerPlantUML).join(os.EOL);
    }
}
