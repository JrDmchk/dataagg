import { UserModel } from "../userModel/UserModel";

export type UserVerificationCode = {
  createdAt: Date;
  expiresAt: Date;
  id: string;
  updatedAt: Date;
  user?: UserModel | null;
  verificationCode: string;
};
