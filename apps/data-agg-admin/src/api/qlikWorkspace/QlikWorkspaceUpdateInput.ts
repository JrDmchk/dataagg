import { QlikIntegrationWhereUniqueInput } from "../qlikIntegration/QlikIntegrationWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type QlikWorkspaceUpdateInput = {
  qlikintegration?: QlikIntegrationWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
