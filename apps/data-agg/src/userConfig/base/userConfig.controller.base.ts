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
import { UserConfigService } from "../userConfig.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserConfigCreateInput } from "./UserConfigCreateInput";
import { UserConfig } from "./UserConfig";
import { UserConfigFindManyArgs } from "./UserConfigFindManyArgs";
import { UserConfigWhereUniqueInput } from "./UserConfigWhereUniqueInput";
import { UserConfigUpdateInput } from "./UserConfigUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserConfigControllerBase {
  constructor(
    protected readonly service: UserConfigService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserConfig })
  @nestAccessControl.UseRoles({
    resource: "UserConfig",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserConfig(
    @common.Body() data: UserConfigCreateInput
  ): Promise<UserConfig> {
    return await this.service.createUserConfig({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        alias: true,
        createdAt: true,
        id: true,
        language: true,
        mode: true,
        picture: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserConfig] })
  @ApiNestedQuery(UserConfigFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserConfig",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userConfigs(@common.Req() request: Request): Promise<UserConfig[]> {
    const args = plainToClass(UserConfigFindManyArgs, request.query);
    return this.service.userConfigs({
      ...args,
      select: {
        alias: true,
        createdAt: true,
        id: true,
        language: true,
        mode: true,
        picture: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserConfig",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userConfig(
    @common.Param() params: UserConfigWhereUniqueInput
  ): Promise<UserConfig | null> {
    const result = await this.service.userConfig({
      where: params,
      select: {
        alias: true,
        createdAt: true,
        id: true,
        language: true,
        mode: true,
        picture: true,
        updatedAt: true,

        user: {
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
  @swagger.ApiOkResponse({ type: UserConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserConfig",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserConfig(
    @common.Param() params: UserConfigWhereUniqueInput,
    @common.Body() data: UserConfigUpdateInput
  ): Promise<UserConfig | null> {
    try {
      return await this.service.updateUserConfig({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          alias: true,
          createdAt: true,
          id: true,
          language: true,
          mode: true,
          picture: true,
          updatedAt: true,

          user: {
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
  @swagger.ApiOkResponse({ type: UserConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserConfig",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserConfig(
    @common.Param() params: UserConfigWhereUniqueInput
  ): Promise<UserConfig | null> {
    try {
      return await this.service.deleteUserConfig({
        where: params,
        select: {
          alias: true,
          createdAt: true,
          id: true,
          language: true,
          mode: true,
          picture: true,
          updatedAt: true,

          user: {
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
