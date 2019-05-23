import { IGTMFilter } from "./IGTMFilter";

export interface IGTMTrigger {
    accountId: string;
    containerId: string;
    triggerId: string;
    name: string;
    type: string;
    customEventFilter?: IGTMFilter[];
    filter?:  IGTMFilter[];
    fingerprint: string;
}