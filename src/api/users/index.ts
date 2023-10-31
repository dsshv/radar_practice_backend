import express, { Router } from 'express';

export default (app: express.Application) => {
	app.post('/users', require('./userCreate').default);
	app.put('/users/:id', require('./userCreate').default);
};
