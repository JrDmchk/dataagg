import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserConfigListRelationFilter } from "../userConfig/UserConfigListRelationFilter";
import { UsersWorkspaceListRelationFilter } from "../usersWorkspace/UsersWorkspaceListRelationFilter";
import { UserVerificationCodeListRelationFilter } from "../userVerificationCode/UserVerificationCodeListRelationFilter";

export type UserModelWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  password?: StringFilter;
  roles?: JsonFilter;
  status?: BooleanNullableFilter;
  updatedAt?: DateTimeFilter;
  userConfigs?: UserConfigListRelationFilter;
  username?: StringFilter;
  usersWorkspaces?: UsersWorkspaceListRelationFilter;
  userVerificationCodes?: UserVerificationCodeListRelationFilter;
};
