import { InputJsonValue } from "../../types";
import { UserConfigCreateNestedManyWithoutUserModelsInput } from "./UserConfigCreateNestedManyWithoutUserModelsInput";
import { UsersWorkspaceCreateNestedManyWithoutUserModelsInput } from "./UsersWorkspaceCreateNestedManyWithoutUserModelsInput";
import { UserVerificationCodeCreateNestedManyWithoutUserModelsInput } from "./UserVerificationCodeCreateNestedManyWithoutUserModelsInput";

export type UserModelCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  status?: boolean | null;
  userConfigs?: UserConfigCreateNestedManyWithoutUserModelsInput;
  username: string;
  usersWorkspaces?: UsersWorkspaceCreateNestedManyWithoutUserModelsInput;
  userVerificationCodes?: UserVerificationCodeCreateNestedManyWithoutUserModelsInput;
};
