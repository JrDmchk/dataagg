import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserVerificationCodeWhereInput = {
  createdAt?: DateTimeFilter;
  expiresAt?: DateTimeFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  user?: UserModelWhereUniqueInput;
  verificationCode?: StringFilter;
};
