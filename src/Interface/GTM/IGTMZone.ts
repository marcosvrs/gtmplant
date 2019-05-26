import { IGTMBoundary } from "./IGTMBoundary";
import { IGTMChildContainer } from "./IGTMChildContainer";

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
