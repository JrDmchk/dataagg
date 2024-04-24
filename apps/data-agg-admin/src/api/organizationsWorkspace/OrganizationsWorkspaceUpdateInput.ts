import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type OrganizationsWorkspaceUpdateInput = {
  organization?: OrganizationWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
