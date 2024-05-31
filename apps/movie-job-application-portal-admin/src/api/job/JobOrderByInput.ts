import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  applicationDeadline?: SortOrder;
  createdAt?: SortOrder;
  department?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  postedDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
