import { IGTMChildContainer } from "./IGTMChildContainer";
import { IGTMBoundary } from "./IGTMBoundary";

export interface IGTMZone {
    accountId: string;
    containerId: string;
    zoneId: string;
    name: string;
    fingerprint: string;
    childContainer: IGTMChildContainer[];
    boundary: IGTMBoundary;
    typeRestriction: object;
}