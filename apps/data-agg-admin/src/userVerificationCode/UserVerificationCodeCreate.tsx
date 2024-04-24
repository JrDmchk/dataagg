import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserModelTitle } from "../userModel/UserModelTitle";

export const UserVerificationCodeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Expires At" source="expiresAt" />
        <ReferenceInput source="user.id" reference="UserModel" label="User">
          <SelectInput optionText={UserModelTitle} />
        </ReferenceInput>
        <TextInput label="Verification Code" source="verificationCode" />
      </SimpleForm>
    </Create>
  );
};
