import { configDotenv } from 'dotenv';

import app from './api';
configDotenv();

const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
