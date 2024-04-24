import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type UsersWorkspaceWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  user?: UserModelWhereUniqueInput;
  workspace?: WorkspaceWhereUniqueInput;
};
