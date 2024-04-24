import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { QlikWorkspaceListRelationFilter } from "../qlikWorkspace/QlikWorkspaceListRelationFilter";

export type QlikIntegrationWhereInput = {
  alias?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  domain?: StringFilter;
  id?: StringFilter;
  issuer?: BooleanNullableFilter;
  keyId?: StringNullableFilter;
  qlikId?: StringNullableFilter;
  qlikTheme?: StringNullableFilter;
  qlikWebIntegrationId?: StringNullableFilter;
  qlikWorkspaces?: QlikWorkspaceListRelationFilter;
  updatedAt?: DateTimeFilter;
};
