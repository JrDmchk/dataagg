import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type OrganizationsWorkspaceCreateInput = {
  organization?: OrganizationWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
