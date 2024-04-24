import { UserModel as TUserModel } from "../api/userModel/UserModel";

export const USERMODEL_TITLE_FIELD = "firstName";

export const UserModelTitle = (record: TUserModel): string => {
  return record.firstName?.toString() || String(record.id);
};
