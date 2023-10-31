import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const routes = express.Router();

app.use(
	bodyParser.json(),
	bodyParser.urlencoded({
		extended: true,
	}),
);

require('./users').default(routes);

app.use('/api/v1', routes);

export default app;
