import { z } from "zod";

// Basic string and URL schemas
const urlSchema = z.string().url();
const emailSchema = z.string().email();
const descriptionSchema = z.string().optional();

// Contact schema
const contactSchema = z.object({
  name: z.string().optional(),
  url: urlSchema.optional(),
  email: emailSchema.optional(),
});

// License schema
const licenseSchema = z.object({
  name: z.string(),
  url: urlSchema.optional(),
});

// Info schema
const infoSchema = z.object({
  title: z.string(),
  description: descriptionSchema,
  termsOfService: urlSchema.optional(),
  contact: contactSchema.optional(),
  license: licenseSchema.optional(),
  version: z.string(),
});

// Server schema
const serverSchema = z.object({
  url: z.string(),
  description: descriptionSchema,
  variables: z
    .record(
      z.string(),
      z.object({
        enum: z.array(z.string()).optional(),
        default: z.string(),
        description: descriptionSchema,
      })
    )
    .optional(),
});

// External Docs schema
const externalDocsSchema = z.object({
  description: descriptionSchema,
  url: urlSchema,
});

// Parameter schema
const parameterSchema = z.object({
  name: z.string(),
  in: z.enum(["query", "header", "path", "cookie"]),
  description: descriptionSchema,
  required: z.boolean().optional(),
  deprecated: z.boolean().optional(),
  allowEmptyValue: z.boolean().optional(),
  schema: z.object({}).optional(), // Replace with actual schema validation
  style: z.string().optional(),
  explode: z.boolean().optional(),
  allowReserved: z.boolean().optional(),
  example: z.any().optional(),
  examples: z.record(z.string(), z.object({})).optional(),
  content: z
    .record(
      z.string(),
      z.object({
        schema: z.object({}).optional(), // Replace with actual schema validation
        example: z.any().optional(),
        examples: z.record(z.string(), z.object({})).optional(),
      })
    )
    .optional(),
});

// Response schema
const responseSchema = z.object({
  description: z.string(),
  headers: z.record(z.string(), z.object({})).optional(), // Replace with actual header validation
  content: z
    .record(
      z.string(),
      z.object({
        schema: z.object({}).optional(), // Replace with actual schema validation
        example: z.any().optional(),
        examples: z.record(z.string(), z.object({})).optional(),
      })
    )
    .optional(),
  links: z.record(z.string(), z.object({})).optional(),
});

// Operation schema
const operationSchema = z.object({
  tags: z.array(z.string()).optional(),
  summary: z.string().optional(),
  description: descriptionSchema,
  externalDocs: externalDocsSchema.optional(),
  operationId: z.string().optional(),
  parameters: z.array(parameterSchema).optional(),
  requestBody: z
    .object({
      description: descriptionSchema,
      content: z.record(
        z.string(),
        z.object({
          schema: z.object({}).optional(), // Replace with actual schema validation
          example: z.any().optional(),
          examples: z.record(z.string(), z.object({})).optional(),
        })
      ),
      required: z.boolean().optional(),
    })
    .optional(),
  responses: z.record(z.string(), responseSchema),
  callbacks: z.record(z.string(), z.object({})).optional(),
  deprecated: z.boolean().optional(),
  security: z.array(z.record(z.string(), z.array(z.string()))).optional(),
  servers: z.array(serverSchema).optional(),
});

// Path Item schema
const pathItemSchema = z.object({
  summary: z.string().optional(),
  description: descriptionSchema,
  get: operationSchema.optional(),
  put: operationSchema.optional(),
  post: operationSchema.optional(),
  delete: operationSchema.optional(),
  options: operationSchema.optional(),
  head: operationSchema.optional(),
  patch: operationSchema.optional(),
  trace: operationSchema.optional(),
  servers: z.array(serverSchema).optional(),
  parameters: z.array(parameterSchema).optional(),
});

// Components schema
const componentsSchema = z.object({
  schemas: z.record(z.string(), z.object({})).optional(), // Replace with actual schema validation
  responses: z.record(z.string(), responseSchema).optional(),
  parameters: z.record(z.string(), parameterSchema).optional(),
  examples: z.record(z.string(), z.object({})).optional(),
  requestBodies: z.record(z.string(), z.object({})).optional(),
  headers: z.record(z.string(), z.object({})).optional(),
  securitySchemes: z.record(z.string(), z.object({})).optional(),
  links: z.record(z.string(), z.object({})).optional(),
  callbacks: z.record(z.string(), z.object({})).optional(),
});

// Tag schema
const tagSchema = z.object({
  name: z.string(),
  description: descriptionSchema,
  externalDocs: externalDocsSchema.optional(),
});

// OpenAPI schema
const openApiSchema = z.object({
  openapi: z.string(), // version of the OAS
  info: infoSchema,
  servers: z.array(serverSchema).optional(),
  paths: z.record(z.string(), pathItemSchema),
  components: componentsSchema.optional(),
  security: z.array(z.record(z.string(), z.array(z.string()))).optional(),
  tags: z.array(tagSchema).optional(),
  externalDocs: externalDocsSchema.optional(),
});

type OpenAPI = z.infer<typeof openApiSchema>;

export { openApiSchema, type OpenAPI };
