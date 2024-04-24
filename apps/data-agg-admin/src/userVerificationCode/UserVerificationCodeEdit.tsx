import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserModelTitle } from "../userModel/UserModelTitle";

export const UserVerificationCodeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Expires At" source="expiresAt" />
        <ReferenceInput source="user.id" reference="UserModel" label="User">
          <SelectInput optionText={UserModelTitle} />
        </ReferenceInput>
        <TextInput label="Verification Code" source="verificationCode" />
      </SimpleForm>
    </Edit>
  );
};
