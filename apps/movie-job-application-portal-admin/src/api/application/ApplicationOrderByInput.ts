import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicantId?: SortOrder;
  applicationDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
};
