import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";
import { JobTitle } from "../job/JobTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="applicant.id"
          reference="Applicant"
          label="Applicant"
        >
          <SelectInput optionText={ApplicantTitle} />
        </ReferenceInput>
        <DateTimeInput label="ApplicationDate" source="applicationDate" />
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <TextInput label="Notes" multiline source="notes" />
      </SimpleForm>
    </Create>
  );
};
