import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Jobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ApplicationDeadline" source="applicationDeadline" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Department" source="department" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="PostedDate" source="postedDate" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
