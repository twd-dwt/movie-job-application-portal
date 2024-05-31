import { SortOrder } from "../../util/SortOrder";

export type ApplicantOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  portfolioLink?: SortOrder;
  resume?: SortOrder;
  updatedAt?: SortOrder;
};
