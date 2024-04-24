import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type UsersWorkspaceCreateInput = {
  user?: UserModelWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
