import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserVerificationCodeUpdateInput = {
  expiresAt?: Date;
  user?: UserModelWhereUniqueInput | null;
  verificationCode?: string;
};
