import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { QlikIntegrationWhereUniqueInput } from "../qlikIntegration/QlikIntegrationWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type QlikWorkspaceWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  qlikintegration?: QlikIntegrationWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  workspace?: WorkspaceWhereUniqueInput;
};
