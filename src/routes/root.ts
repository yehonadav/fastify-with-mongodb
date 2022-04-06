import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    '/',
    {schema: {
        description: 'hello world',
        tags: ['hello world'],
        summary: 'hello world',
        response: {
          200: {
            description: 'Successful response',
            type: 'object',
            properties: {
              root: { type: 'boolean' }
            }
          }
        }
    }},
    async function (request, reply) {
    return { root: true }
  })
}

export default root;
