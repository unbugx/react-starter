import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const myEnv = dotenv.config();
export default dotenvExpand(myEnv);
