import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type UsersWorkspaceUpdateInput = {
  user?: UserModelWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
