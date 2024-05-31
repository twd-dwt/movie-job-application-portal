import { Application } from "../application/Application";
import { JsonValue } from "type-fest";

export type Applicant = {
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  portfolioLink: string | null;
  resume: JsonValue;
  updatedAt: Date;
};
