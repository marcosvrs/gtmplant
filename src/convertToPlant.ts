import os from 'os';
import { IGTMTag } from "./Interface/IGTMTag";
import { IGTMTrigger } from "./Interface/IGTMTrigger";
import { IGTMVariable } from './Interface/IGTMVariable';
import { IGTMParameter } from './Interface/IGTMParameter';
import { IGTMCustomEventFilter } from './Interface/IGTMCustomEventFilter';
import { IGTMWorkspace } from './Interface/IGTMWorkspace';
import { UniqueValueArray } from './UniqueValueArray';

const USAGE_LEFT_ARROW: string = '<--';

export function convertToPlant(gtmJSON: IGTMWorkspace): string {
    const plantDocument: UniqueValueArray<string> = new UniqueValueArray<string>('@startuml');
    gtmJSON.containerVersion.variable.forEach((variable: IGTMVariable): void => {
        plantDocument.push(`object "${variable.name}"`);
        gtmJSON.containerVersion.tag.forEach((tag: IGTMTag): void => {
            plantDocument.push(`object "${tag.name}"`);
            if (tag.parameter.some((parameter: IGTMParameter): boolean => parameter.value.indexOf(variable.name) >= 0)) {
                plantDocument.push(`"${variable.name}" ${USAGE_LEFT_ARROW} "${tag.name}"`);
            }
        });
        gtmJSON.containerVersion.trigger.forEach((trigger: IGTMTrigger): void => {
            plantDocument.push(`object "${trigger.name}"`);
            if (trigger.customEventFilter !== undefined && trigger.customEventFilter.some((customEventFilter: IGTMCustomEventFilter): boolean => customEventFilter.parameter.some((parameter: IGTMParameter): string => parameter.value.indexOf(variable.name) >= 0))) {
                plantDocument.push(`"${variable.name}" ${USAGE_LEFT_ARROW} "${trigger.name}"`);
            }
            plantDocument.push(`object "${trigger.name}"`);
        });
    });
    plantDocument.push('@enduml')
    return plantDocument.join(os.EOL);
}
