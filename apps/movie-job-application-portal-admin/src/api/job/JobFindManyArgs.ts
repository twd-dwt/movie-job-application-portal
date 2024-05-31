import { JobWhereInput } from "./JobWhereInput";
import { JobOrderByInput } from "./JobOrderByInput";

export type JobFindManyArgs = {
  where?: JobWhereInput;
  orderBy?: Array<JobOrderByInput>;
  skip?: number;
  take?: number;
};
