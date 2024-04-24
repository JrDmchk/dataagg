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

import { UserConfigTitle } from "../userConfig/UserConfigTitle";
import { UsersWorkspaceTitle } from "../usersWorkspace/UsersWorkspaceTitle";
import { UserVerificationCodeTitle } from "../userVerificationCode/UserVerificationCodeTitle";

export const UserModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Password" source="password" />
        <div />
        <BooleanInput label="Status" source="status" />
        <ReferenceArrayInput
          source="userConfigs"
          reference="UserConfig"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserConfigTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="usersWorkspaces"
          reference="UsersWorkspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsersWorkspaceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userVerificationCodes"
          reference="UserVerificationCode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserVerificationCodeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
