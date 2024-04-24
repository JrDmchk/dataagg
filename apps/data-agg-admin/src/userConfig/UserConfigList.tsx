import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const UserConfigList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserConfigs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Alias" source="alias" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Mode" source="mode" />
        <TextField label="Picture" source="picture" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User"
          source="usermodel.id"
          reference="UserModel"
        >
          <TextField source={USERMODEL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
