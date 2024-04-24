import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const QlikIntegrationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QlikIntegrations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Alias" source="alias" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Domain" source="domain" />
        <TextField label="ID" source="id" />
        <BooleanField label="Issuer" source="issuer" />
        <TextField label="Key Id" source="keyId" />
        <TextField label="Qlik Id" source="qlikId" />
        <TextField label="Qlik Theme" source="qlikTheme" />
        <TextField
          label="Qlik Web Integration Id"
          source="qlikWebIntegrationId"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
