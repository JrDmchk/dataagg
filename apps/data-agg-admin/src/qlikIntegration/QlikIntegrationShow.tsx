import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QLIKINTEGRATION_TITLE_FIELD } from "./QlikIntegrationTitle";
import { WORKSPACE_TITLE_FIELD } from "../workspace/WorkspaceTitle";

export const QlikIntegrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="QlikWorkspace"
          target="qlikd"
          label="QlikWorkspaces"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Qlikintegration"
              source="qlikintegration.id"
              reference="QlikIntegration"
            >
              <TextField source={QLIKINTEGRATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Workspace"
              source="workspace.id"
              reference="Workspace"
            >
              <TextField source={WORKSPACE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
