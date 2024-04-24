import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QlikIntegrationTitle } from "../qlikIntegration/QlikIntegrationTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

export const QlikWorkspaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
