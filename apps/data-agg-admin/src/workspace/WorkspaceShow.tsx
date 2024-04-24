import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { WORKSPACE_TITLE_FIELD } from "./WorkspaceTitle";
import { QLIKINTEGRATION_TITLE_FIELD } from "../qlikIntegration/QlikIntegrationTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const WorkspaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="OrganizationsWorkspace"
          target="workspaceId"
          label="OrganizationsWorkspaces"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
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
        <ReferenceManyField
          reference="QlikWorkspace"
          target="workspaceId"
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
        <ReferenceManyField
          reference="UsersWorkspace"
          target="workspaceId"
          label="UsersWorkspaces"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="User"
              source="usermodel.id"
              reference="UserModel"
            >
              <TextField source={USERMODEL_TITLE_FIELD} />
            </ReferenceField>
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
