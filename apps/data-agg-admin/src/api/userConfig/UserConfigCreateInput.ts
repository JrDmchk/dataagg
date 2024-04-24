import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserConfigCreateInput = {
  alias?: string | null;
  language?: string | null;
  mode?: string | null;
  picture?: string | null;
  user?: UserModelWhereUniqueInput | null;
};
