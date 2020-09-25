import childProcess, { ChildProcess } from 'child_process';
import path from 'path';
import webpackConfig from './webpack.config';

const [, serverConfig] = webpackConfig;

let server: ChildProcess;
let pending = true;

const serverPath = path.join(serverConfig.output.path, serverConfig.output.filename);

// Should match the text string used in `src/server.ts -> app.listen(...)`
const RUNNING_REGEXP = /The server is running at https?:\/\/(.*?)\//;

async function runServer() {
  await new Promise((resolve) => {
    function onStdOut(data: any) {
      const time = new Date().toTimeString();
      const match = data.toString('utf8').match(RUNNING_REGEXP);

      process.stdout.write(time.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '[$1] '));
      process.stdout.write(data);

      if (match) {
        server.stdout?.removeListener('data', onStdOut);
        server.stdout?.on('data', x => process.stdout.write(x));
        pending = false;
        resolve(server);
      }
    }

    if (server) {
      server.kill('SIGTERM');
    }

    server = childProcess.spawn('node', [serverPath]);

    server.stdout?.on('data', onStdOut);

    server.stderr?.on('data', x => process.stderr.write(x));

    if (pending) {
      server.once('exit', (code, signal) => {
        if (pending) {
          throw new Error(`Server terminated unexpectedly with code: ${code} signal: ${signal}`);
        }
      });
    }
  });
}

export default runServer;
