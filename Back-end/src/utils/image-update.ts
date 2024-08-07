import multer from 'multer';
import path from 'path';


export default {
	storage: multer.diskStorage({
		destination: path.resolve(__dirname, '..', 'public', 'users'),
		filename(req, file, callback) {
			const dt = new Date();

			const filename = `${dt}-${file.originalname}`;

			callback(null, filename);
		}
	}),
};