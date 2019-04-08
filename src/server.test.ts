import { Server } from './server';
describe('server', () => {
  let server: Server;

  beforeEach(async () => {
    server = new Server();
    await server.start();
  });

  afterEach(async () => {
    try {
      await server.stop();
    } catch (_) {
      // Ignore any catch
    }
  });
  it('should throw when starting already started server', async () => {
    await expect(server.start()).rejects.toEqual('server already started');
  });
  it('should throw when stopping not started server', async () => {
    await server.stop(); // Stop server before next line
    await expect(server.stop()).rejects.toEqual('server not started');
  });
});
