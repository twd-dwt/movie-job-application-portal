import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  applicationDeadline?: Date | null;
  applications?: ApplicationUpdateManyWithoutJobsInput;
  department?: string | null;
  description?: string | null;
  location?: string | null;
  postedDate?: Date | null;
  title?: string | null;
};
