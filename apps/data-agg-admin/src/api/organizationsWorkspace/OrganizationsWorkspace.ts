import { Organization } from "../organization/Organization";
import { Workspace } from "../workspace/Workspace";

export type OrganizationsWorkspace = {
  createdAt: Date;
  id: string;
  organization?: Organization | null;
  updatedAt: Date;
  workspace?: Workspace | null;
};
