import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationCreateInput = {
  applicant?: ApplicantWhereUniqueInput | null;
  applicationDate?: Date | null;
  job?: JobWhereUniqueInput | null;
  notes?: string | null;
};
