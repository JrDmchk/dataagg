/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QlikIntegrationWhereUniqueInput } from "../../qlikIntegration/base/QlikIntegrationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { WorkspaceWhereUniqueInput } from "../../workspace/base/WorkspaceWhereUniqueInput";

@InputType()
class QlikWorkspaceCreateInput {
  @ApiProperty({
    required: false,
    type: () => QlikIntegrationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QlikIntegrationWhereUniqueInput)
  @IsOptional()
  @Field(() => QlikIntegrationWhereUniqueInput, {
    nullable: true,
  })
  qlikintegration?: QlikIntegrationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WorkspaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkspaceWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true,
  })
  workspace?: WorkspaceWhereUniqueInput | null;
}

export { QlikWorkspaceCreateInput as QlikWorkspaceCreateInput };
