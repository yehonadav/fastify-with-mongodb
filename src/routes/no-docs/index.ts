import { FastifyPluginAsync } from "fastify"

const nanit: FastifyPluginAsync = async (server, opts): Promise<void> => {
  server.get('/', async (request, reply) => {
    reply.send({message: "get success" });
  });

  server.post('/', async (request, reply) => {
    reply.send({message: "post success" });
  });

  server.put('/:id', async (request, reply) => {
    const {id} = request.params as any;
    reply.send({message: `put ${id} success` });
  });

  server.delete('/:id',
    async (request, reply) => {
    const {id} = request.params as any;
    reply.send({message: `delete ${id} success` });
  });
}

export default nanit;
