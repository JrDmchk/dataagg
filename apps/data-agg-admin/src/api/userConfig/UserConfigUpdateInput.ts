import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserConfigUpdateInput = {
  alias?: string | null;
  language?: string | null;
  mode?: string | null;
  picture?: string | null;
  user?: UserModelWhereUniqueInput | null;
};
