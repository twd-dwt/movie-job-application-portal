import { JobWhereInput } from "./JobWhereInput";

export type JobListRelationFilter = {
  every?: JobWhereInput;
  some?: JobWhereInput;
  none?: JobWhereInput;
};
