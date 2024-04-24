/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QlikWorkspaceService } from "../qlikWorkspace.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QlikWorkspaceCreateInput } from "./QlikWorkspaceCreateInput";
import { QlikWorkspace } from "./QlikWorkspace";
import { QlikWorkspaceFindManyArgs } from "./QlikWorkspaceFindManyArgs";
import { QlikWorkspaceWhereUniqueInput } from "./QlikWorkspaceWhereUniqueInput";
import { QlikWorkspaceUpdateInput } from "./QlikWorkspaceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QlikWorkspaceControllerBase {
  constructor(
    protected readonly service: QlikWorkspaceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QlikWorkspace })
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQlikWorkspace(
    @common.Body() data: QlikWorkspaceCreateInput
  ): Promise<QlikWorkspace> {
    return await this.service.createQlikWorkspace({
      data: {
        ...data,

        qlikintegration: data.qlikintegration
          ? {
              connect: data.qlikintegration,
            }
          : undefined,

        workspace: data.workspace
          ? {
              connect: data.workspace,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        qlikintegration: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QlikWorkspace] })
  @ApiNestedQuery(QlikWorkspaceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async qlikWorkspaces(
    @common.Req() request: Request
  ): Promise<QlikWorkspace[]> {
    const args = plainToClass(QlikWorkspaceFindManyArgs, request.query);
    return this.service.qlikWorkspaces({
      ...args,
      select: {
        createdAt: true,
        id: true,

        qlikintegration: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QlikWorkspace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async qlikWorkspace(
    @common.Param() params: QlikWorkspaceWhereUniqueInput
  ): Promise<QlikWorkspace | null> {
    const result = await this.service.qlikWorkspace({
      where: params,
      select: {
        createdAt: true,
        id: true,

        qlikintegration: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QlikWorkspace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQlikWorkspace(
    @common.Param() params: QlikWorkspaceWhereUniqueInput,
    @common.Body() data: QlikWorkspaceUpdateInput
  ): Promise<QlikWorkspace | null> {
    try {
      return await this.service.updateQlikWorkspace({
        where: params,
        data: {
          ...data,

          qlikintegration: data.qlikintegration
            ? {
                connect: data.qlikintegration,
              }
            : undefined,

          workspace: data.workspace
            ? {
                connect: data.workspace,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          qlikintegration: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          workspace: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: QlikWorkspace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QlikWorkspace",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQlikWorkspace(
    @common.Param() params: QlikWorkspaceWhereUniqueInput
  ): Promise<QlikWorkspace | null> {
    try {
      return await this.service.deleteQlikWorkspace({
        where: params,
        select: {
          createdAt: true,
          id: true,

          qlikintegration: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          workspace: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
