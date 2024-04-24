import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationsWorkspaceListRelationFilter } from "../organizationsWorkspace/OrganizationsWorkspaceListRelationFilter";
import { QlikWorkspaceListRelationFilter } from "../qlikWorkspace/QlikWorkspaceListRelationFilter";
import { UsersWorkspaceListRelationFilter } from "../usersWorkspace/UsersWorkspaceListRelationFilter";

export type WorkspaceWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  organizationsWorkspaces?: OrganizationsWorkspaceListRelationFilter;
  qlikWorkspaces?: QlikWorkspaceListRelationFilter;
  slug?: StringFilter;
  updatedAt?: DateTimeFilter;
  usersWorkspaces?: UsersWorkspaceListRelationFilter;
};
