import { Applicant as TApplicant } from "../api/applicant/Applicant";

export const APPLICANT_TITLE_FIELD = "firstName";

export const ApplicantTitle = (record: TApplicant): string => {
  return record.firstName?.toString() || String(record.id);
};
