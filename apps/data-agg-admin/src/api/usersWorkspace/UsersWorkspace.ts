import { UserModel } from "../userModel/UserModel";
import { Workspace } from "../workspace/Workspace";

export type UsersWorkspace = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: UserModel | null;
  workspace?: Workspace | null;
};
