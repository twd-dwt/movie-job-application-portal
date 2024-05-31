import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  applicationDeadline?: Date | null;
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  department?: string | null;
  description?: string | null;
  location?: string | null;
  postedDate?: Date | null;
  title?: string | null;
};
