import { IGTMParameter } from "./IGTMParameter";

export interface IGTMTag {
    accountId: string;
    containerId: string;
    tagId: string;
    name: string;
    type: string;
    parameter: IGTMParameter[];
    fingerprint: string;
    firingTriggerId?: string[];
    blockingTriggerId?: string[];
    tagFiringOption?: string;
}