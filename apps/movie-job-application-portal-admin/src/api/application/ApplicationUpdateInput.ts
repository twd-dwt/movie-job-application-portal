import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationUpdateInput = {
  applicant?: ApplicantWhereUniqueInput | null;
  applicationDate?: Date | null;
  job?: JobWhereUniqueInput | null;
  notes?: string | null;
};
