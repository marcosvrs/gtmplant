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
        gtmJSON.containerVersion.tag.forEach((tag: IGTMTag): void => {
            plantDocument.push(`object "${tag.name}"`);
            if (tag.parameter.map((parameter: IGTMParameter): string => parameter.value).indexOf(variable.name)) {
                plantDocument.push(`"${variable.name}" ${USAGE_LEFT_ARROW} "${tag.name}"`);
            }
        });
        gtmJSON.containerVersion.trigger.forEach((trigger: IGTMTrigger): void => {
            plantDocument.push(`object "${trigger.name}"`);
            if (trigger.customEventFilter !== undefined && trigger.customEventFilter.some((customEventFilter: IGTMCustomEventFilter): boolean => !!customEventFilter.parameter.map((parameter: IGTMParameter): string => parameter.value).indexOf(variable.name))) {
                plantDocument.push(`"${variable.name}" ${USAGE_LEFT_ARROW} "${trigger.name}"`);
            }
            plantDocument.push(`object "${trigger.name}"`);
        });
        plantDocument.push(`object "${variable.name}"`);
    });
    plantDocument.push('@enduml')
    return plantDocument.filter((value: string, index: number, array: string[]): boolean => array.indexOf(value) === index).join(os.EOL);
}