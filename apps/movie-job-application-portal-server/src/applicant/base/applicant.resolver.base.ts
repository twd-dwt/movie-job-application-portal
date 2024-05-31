/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Applicant } from "./Applicant";
import { ApplicantCountArgs } from "./ApplicantCountArgs";
import { ApplicantFindManyArgs } from "./ApplicantFindManyArgs";
import { ApplicantFindUniqueArgs } from "./ApplicantFindUniqueArgs";
import { CreateApplicantArgs } from "./CreateApplicantArgs";
import { UpdateApplicantArgs } from "./UpdateApplicantArgs";
import { DeleteApplicantArgs } from "./DeleteApplicantArgs";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { ApplicantService } from "../applicant.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Applicant)
export class ApplicantResolverBase {
  constructor(
    protected readonly service: ApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "read",
    possession: "any",
  })
  async _applicantsMeta(
    @graphql.Args() args: ApplicantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Applicant])
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "read",
    possession: "any",
  })
  async applicants(
    @graphql.Args() args: ApplicantFindManyArgs
  ): Promise<Applicant[]> {
    return this.service.applicants(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Applicant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "read",
    possession: "own",
  })
  async applicant(
    @graphql.Args() args: ApplicantFindUniqueArgs
  ): Promise<Applicant | null> {
    const result = await this.service.applicant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Applicant)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "create",
    possession: "any",
  })
  async createApplicant(
    @graphql.Args() args: CreateApplicantArgs
  ): Promise<Applicant> {
    return await this.service.createApplicant({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Applicant)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "update",
    possession: "any",
  })
  async updateApplicant(
    @graphql.Args() args: UpdateApplicantArgs
  ): Promise<Applicant | null> {
    try {
      return await this.service.updateApplicant({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Applicant)
  @nestAccessControl.UseRoles({
    resource: "Applicant",
    action: "delete",
    possession: "any",
  })
  async deleteApplicant(
    @graphql.Args() args: DeleteApplicantArgs
  ): Promise<Applicant | null> {
    try {
      return await this.service.deleteApplicant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Application], { name: "applications" })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  async findApplications(
    @graphql.Parent() parent: Applicant,
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    const results = await this.service.findApplications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
