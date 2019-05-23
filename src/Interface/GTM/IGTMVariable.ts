import { IGTMParameter } from "./IGTMParameter";

export interface IGTMVariable {
    accountId: string;
    containerId: string;
    variableId: string;
    name: string;
    type: string;
    parameter: IGTMParameter[];
    fingerprint: string;
    formatValue: object;
}