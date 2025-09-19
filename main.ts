import * as dotenv from 'dotenv';

import { TronApplication } from './src/app';
dotenv.config();

const app = TronApplication.CreateApp();
app.startREPL();
