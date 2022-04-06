import { FastifyPluginAsync } from "fastify"

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    '/',
    {schema: {
        description: 'get example',
        tags: ['example'],
        summary: 'get example',
        response: {
          200: {
            description: 'Successful response',
            type: 'string',
          }
        }
      }},
    async function (request, reply) {
    return 'this is a GET example'
  });

  fastify.post(
    '/',
    {
      schema: {
        description: 'post example',
        tags: ['example'],
        summary: 'post example',
        body: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
            },
          },
        },
        response: {
          201: {
            description: 'Successful response',
            type: 'object',
            properties: {
              message: { type: 'string' }
            }
          },
          default: {
            description: 'Default response',
            type: 'object',
            properties: {
              id: { type: 'string' }
            }
          }
        },
        security: [
          {
            "apiKey": []
          }
        ]
      }
    },
    async function (request, reply) {
      return { message: 'this is a POST example'}
    }
  );

  fastify.put('/:id', {
    schema: {
      description: 'put example',
      tags: ['example'],
      summary: 'put example',
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'example id'
          }
        }
      },
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          obj: {
            type: 'object',
            properties: {
              some: { type: 'string' }
            }
          }
        }
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        },
        default: {
          description: 'Default response',
          type: 'object',
          properties: {
            foo: { type: 'string' }
          }
        }
      },
      security: [
        {
          "apiKey": []
        }
      ]
    }
  }, (req, reply) => {
    reply.send({hello:"123"})
  });

  fastify.delete('/:id', {
    schema: {
      description: 'delete example',
      tags: ['example'],
      summary: 'delete example',
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'example id'
          }
        }
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'string',
        },
      },
      security: [
        {
          "apiKey": []
        }
      ]
    }
  }, (req, reply) => {
    reply.send("")
  });

  fastify.get('/no-docs', async (request, reply) => {
    reply.send({query: request.query, headers: request.headers});
  });
}

export default example;
