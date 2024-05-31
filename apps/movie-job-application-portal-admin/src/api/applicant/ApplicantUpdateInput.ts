import { ApplicationUpdateManyWithoutApplicantsInput } from "./ApplicationUpdateManyWithoutApplicantsInput";
import { InputJsonValue } from "../../types";

export type ApplicantUpdateInput = {
  applications?: ApplicationUpdateManyWithoutApplicantsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  portfolioLink?: string | null;
  resume?: InputJsonValue;
};
