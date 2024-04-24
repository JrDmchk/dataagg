import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const UserConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Alias" source="alias" />
        <TextInput label="Language" source="language" />
        <TextInput label="Mode" source="mode" />
        <TextInput label="Picture" source="picture" />
        <ReferenceInput source="user.id" reference="UserModel" label="User">
          <SelectInput optionText={UserModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
