import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationsWorkspaceListRelationFilter } from "../organizationsWorkspace/OrganizationsWorkspaceListRelationFilter";

export type OrganizationWhereInput = {
  createdAt?: DateTimeFilter;
  domain?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  organizationsWorkspaces?: OrganizationsWorkspaceListRelationFilter;
  owner?: StringNullableFilter;
  slug?: StringFilter;
  updatedAt?: DateTimeFilter;
};
