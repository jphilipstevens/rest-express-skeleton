import express from "express";
import helmet from "helmet";
import { getDisplayString } from "./render";

console.log(getDisplayString()); // eslint-disable-line no-console

const app = express();
app.use(helmet());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Server is listening on port 3000...')) // eslint-disable-line no-console
