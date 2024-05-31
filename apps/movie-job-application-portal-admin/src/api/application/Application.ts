import { Applicant } from "../applicant/Applicant";
import { Job } from "../job/Job";

export type Application = {
  applicant?: Applicant | null;
  applicationDate: Date | null;
  createdAt: Date;
  id: string;
  job?: Job | null;
  notes: string | null;
  updatedAt: Date;
};
