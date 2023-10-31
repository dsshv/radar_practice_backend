import { Request, Response } from 'express';
import ApiResponseHandler from '../apiResponseHandler';

export default async (req: Request<{ id: string }, {}, { name: string }>, res: Response) => {
	try {
		console.log(req.body);

		await ApiResponseHandler.success(req, res, 'Ok');
	} catch (error) {
		if (error instanceof Error) await ApiResponseHandler.error(req, res, error);
		else console.log(';(');
	}
};
