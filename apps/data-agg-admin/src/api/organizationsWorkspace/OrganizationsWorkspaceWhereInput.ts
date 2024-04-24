import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type OrganizationsWorkspaceWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  workspace?: WorkspaceWhereUniqueInput;
};
