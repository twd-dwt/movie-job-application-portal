import { Application } from "../application/Application";

export type Job = {
  applicationDeadline: Date | null;
  applications?: Array<Application>;
  createdAt: Date;
  department: string | null;
  description: string | null;
  id: string;
  location: string | null;
  postedDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
