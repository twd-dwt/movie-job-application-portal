import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { JobController } from "../job.controller";
import { JobService } from "../job.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationDeadline: new Date(),
  createdAt: new Date(),
  department: "exampleDepartment",
  description: "exampleDescription",
  id: "exampleId",
  location: "exampleLocation",
  postedDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  applicationDeadline: new Date(),
  createdAt: new Date(),
  department: "exampleDepartment",
  description: "exampleDescription",
  id: "exampleId",
  location: "exampleLocation",
  postedDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    applicationDeadline: new Date(),
    createdAt: new Date(),
    department: "exampleDepartment",
    description: "exampleDescription",
    id: "exampleId",
    location: "exampleLocation",
    postedDate: new Date(),
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  applicationDeadline: new Date(),
  createdAt: new Date(),
  department: "exampleDepartment",
  description: "exampleDescription",
  id: "exampleId",
  location: "exampleLocation",
  postedDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  createJob() {
    return CREATE_RESULT;
  },
  jobs: () => FIND_MANY_RESULT,
  job: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Job", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JobService,
          useValue: service,
        },
      ],
      controllers: [JobController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /jobs", async () => {
    await request(app.getHttpServer())
      .post("/jobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        applicationDeadline: CREATE_RESULT.applicationDeadline.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        postedDate: CREATE_RESULT.postedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /jobs", async () => {
    await request(app.getHttpServer())
      .get("/jobs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          applicationDeadline:
            FIND_MANY_RESULT[0].applicationDeadline.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          postedDate: FIND_MANY_RESULT[0].postedDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /jobs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /jobs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        applicationDeadline: FIND_ONE_RESULT.applicationDeadline.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        postedDate: FIND_ONE_RESULT.postedDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /jobs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/jobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        applicationDeadline: CREATE_RESULT.applicationDeadline.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        postedDate: CREATE_RESULT.postedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/jobs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
