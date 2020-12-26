import * as path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const myEnvDefault = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), '.env.default')));
const myEnv = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), '.env')));
dotenvExpand({ parsed: { ...myEnvDefault, ...myEnv } });
