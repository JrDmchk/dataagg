/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UsersWorkspace as PrismaUsersWorkspace,
  UserModel as PrismaUserModel,
  Workspace as PrismaWorkspace,
} from "@prisma/client";

export class UsersWorkspaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UsersWorkspaceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.usersWorkspace.count(args);
  }

  async usersWorkspaces<T extends Prisma.UsersWorkspaceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersWorkspaceFindManyArgs>
  ): Promise<PrismaUsersWorkspace[]> {
    return this.prisma.usersWorkspace.findMany<Prisma.UsersWorkspaceFindManyArgs>(
      args
    );
  }
  async usersWorkspace<T extends Prisma.UsersWorkspaceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersWorkspaceFindUniqueArgs>
  ): Promise<PrismaUsersWorkspace | null> {
    return this.prisma.usersWorkspace.findUnique(args);
  }
  async createUsersWorkspace<T extends Prisma.UsersWorkspaceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersWorkspaceCreateArgs>
  ): Promise<PrismaUsersWorkspace> {
    return this.prisma.usersWorkspace.create<T>(args);
  }
  async updateUsersWorkspace<T extends Prisma.UsersWorkspaceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersWorkspaceUpdateArgs>
  ): Promise<PrismaUsersWorkspace> {
    return this.prisma.usersWorkspace.update<T>(args);
  }
  async deleteUsersWorkspace<T extends Prisma.UsersWorkspaceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsersWorkspaceDeleteArgs>
  ): Promise<PrismaUsersWorkspace> {
    return this.prisma.usersWorkspace.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUserModel | null> {
    return this.prisma.usersWorkspace
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getWorkspace(parentId: string): Promise<PrismaWorkspace | null> {
    return this.prisma.usersWorkspace
      .findUnique({
        where: { id: parentId },
      })
      .workspace();
  }
}
