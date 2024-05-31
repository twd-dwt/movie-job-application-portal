import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput
          label="ApplicationDeadline"
          source="applicationDeadline"
        />
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Department" source="department" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Location" source="location" />
        <DateTimeInput label="PostedDate" source="postedDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
