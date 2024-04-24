import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserConfigWhereInput = {
  alias?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  mode?: StringNullableFilter;
  picture?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  user?: UserModelWhereUniqueInput;
};
