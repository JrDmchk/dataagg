import { InputJsonValue } from "../../types";
import { UserConfigUpdateManyWithoutUserModelsInput } from "./UserConfigUpdateManyWithoutUserModelsInput";
import { UsersWorkspaceUpdateManyWithoutUserModelsInput } from "./UsersWorkspaceUpdateManyWithoutUserModelsInput";
import { UserVerificationCodeUpdateManyWithoutUserModelsInput } from "./UserVerificationCodeUpdateManyWithoutUserModelsInput";

export type UserModelUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  status?: boolean | null;
  userConfigs?: UserConfigUpdateManyWithoutUserModelsInput;
  username?: string;
  usersWorkspaces?: UsersWorkspaceUpdateManyWithoutUserModelsInput;
  userVerificationCodes?: UserVerificationCodeUpdateManyWithoutUserModelsInput;
};
