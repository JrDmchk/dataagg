import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserVerificationCodeCreateInput = {
  expiresAt: Date;
  user?: UserModelWhereUniqueInput | null;
  verificationCode: string;
};
