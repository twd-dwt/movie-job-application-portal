import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPLICANT_TITLE_FIELD } from "../applicant/ApplicantTitle";
import { JOB_TITLE_FIELD } from "./JobTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ApplicationDeadline" source="applicationDeadline" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Department" source="department" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="PostedDate" source="postedDate" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Application"
          target="jobId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Applicant"
              source="applicant.id"
              reference="Applicant"
            >
              <TextField source={APPLICANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ApplicationDate" source="applicationDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Notes" source="notes" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
