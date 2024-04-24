import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const UserConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Alias" source="alias" />
        <TextInput label="Language" source="language" />
        <TextInput label="Mode" source="mode" />
        <TextInput label="Picture" source="picture" />
        <ReferenceInput source="user.id" reference="UserModel" label="User">
          <SelectInput optionText={UserModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
