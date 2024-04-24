import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QlikWorkspaceTitle } from "../qlikWorkspace/QlikWorkspaceTitle";

export const QlikIntegrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Alias" source="alias" />
        <TextInput label="Domain" source="domain" />
        <BooleanInput label="Issuer" source="issuer" />
        <TextInput label="Key Id" source="keyId" />
        <TextInput label="Qlik Id" source="qlikId" />
        <TextInput label="Qlik Theme" source="qlikTheme" />
        <TextInput
          label="Qlik Web Integration Id"
          source="qlikWebIntegrationId"
        />
        <ReferenceArrayInput
          source="qlikWorkspaces"
          reference="QlikWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QlikWorkspaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
