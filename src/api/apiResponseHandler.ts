import { Request, Response } from 'express';

export default class ApiResponseHandler {
	static async download(req: Request, res: Response, path: string) {
		res.download(path);
	}

	static async success(req: Request, res: Response, payload: unknown) {
		if (payload !== undefined) {
			res.status(200).send(payload);
		} else {
			res.sendStatus(200);
		}
	}
	static async customSuccess(req: Request, res: Response) {}

	static async noContentSuccess(req: Request, res: Response) {}

	static async error(req: Request, res: Response, error: Error) {
		res.status(500).send(error.message);
	}
}
