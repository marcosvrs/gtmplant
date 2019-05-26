import { IGTMContainerVersion } from "./IGTMContainerVersion";

export interface IGTMWorkspace {
    exportFormatVersion: number;
    exportTime: string;
    containerVersion: IGTMContainerVersion;
}
