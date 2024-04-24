import { QlikIntegrationWhereUniqueInput } from "../qlikIntegration/QlikIntegrationWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type QlikWorkspaceCreateInput = {
  qlikintegration?: QlikIntegrationWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
