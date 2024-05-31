import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobWhereInput = {
  applicationDeadline?: DateTimeNullableFilter;
  applications?: ApplicationListRelationFilter;
  department?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  postedDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
