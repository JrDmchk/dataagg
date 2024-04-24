/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QlikIntegrationWhereUniqueInput } from "./QlikIntegrationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QlikIntegrationUpdateInput } from "./QlikIntegrationUpdateInput";

@ArgsType()
class UpdateQlikIntegrationArgs {
  @ApiProperty({
    required: true,
    type: () => QlikIntegrationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QlikIntegrationWhereUniqueInput)
  @Field(() => QlikIntegrationWhereUniqueInput, { nullable: false })
  where!: QlikIntegrationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QlikIntegrationUpdateInput,
  })
  @ValidateNested()
  @Type(() => QlikIntegrationUpdateInput)
  @Field(() => QlikIntegrationUpdateInput, { nullable: false })
  data!: QlikIntegrationUpdateInput;
}

export { UpdateQlikIntegrationArgs as UpdateQlikIntegrationArgs };
