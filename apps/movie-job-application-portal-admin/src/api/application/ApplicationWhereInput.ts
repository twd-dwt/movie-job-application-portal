import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ApplicationWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  applicationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  notes?: StringNullableFilter;
};
