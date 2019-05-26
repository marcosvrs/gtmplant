import { IGTMContainer } from "./IGTMContainer";
import { IGTMTag } from "./IGTMTag";
import { IGTMTrigger } from "./IGTMTrigger";
import { IGTMVariable } from "./IGTMVariable";
import { IGTMFolder } from "./IGTMFolder";
import { IGTMBuiltInVariable } from "./IGTMBuiltInVariable";
import { IGTMZone } from "./IGTMZone";

export interface IGTMContainerVersion {
    path?: string;
    accountId: string;
    containerId: string;
    containerVersionId: string;
    container: IGTMContainer;
    tag?: IGTMTag[];
    trigger?: IGTMTrigger[];
    variable?: IGTMVariable[];
    folder?: IGTMFolder[];
    builtInVariable?: IGTMBuiltInVariable[];
    fingerprint: string;
    tagManagerUrl?: string;
    zone?: IGTMZone[];
}