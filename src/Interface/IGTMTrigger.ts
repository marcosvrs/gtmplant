import { IGTMCustomEventFilter } from "./IGTMCustomEventFilter";

export interface IGTMTrigger {
    accountId: string;
    containerId: string;
    triggerId: string;
    name: string;
    type: string;
    customEventFilter?: IGTMCustomEventFilter[];
    fingerprint: string;
}