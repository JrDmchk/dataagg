import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QlikIntegrationTitle } from "../qlikIntegration/QlikIntegrationTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

export const QlikWorkspaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="qlikintegration.id"
          reference="QlikIntegration"
          label="Qlikintegration"
        >
          <SelectInput optionText={QlikIntegrationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="workspace.id"
          reference="Workspace"
          label="Workspace"
        >
          <SelectInput optionText={WorkspaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
