import { Id } from "../../convex/_generated/dataModel";

// type for Project details
export type Project = {
  _id: string;
  _creationTime: number;
  owner: string;
  projName: string;
  synopsis: string;
};
