import express from 'express';
import path from 'path';
import { resizeImage } from '../../../utils/resizer';
import fs, { existsSync } from 'fs';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response):Promise<void> => {
  try {
    //get url params filename, width, height
    const filename: string = req.query.filename as unknown as string;
    const width: number = parseInt(req.query.width as unknown as string);
    const height: number = parseInt(req.query.height as unknown as string);

    const originalPath: string = path.resolve(`public/assets/original/${filename}.jpg`);
    const thumbPath: string = path.resolve(`public/assets/thumb/${filename}_thumb.jpg`);

    if (isNaN(width) || width === 0) {
      res.status(400).send('Please supply width dimension in url');
    } else if (isNaN(height) || height === 0) {
      res.status(400).send('Please supply height dimension in url');
    } else if (!fs.existsSync(originalPath)) {
      res.status(404).send(`No file by name ${filename}`);
    } else if(fs.existsSync(thumbPath)){
      res.status(200).sendFile(thumbPath);
    } else {
      await resizeImage(filename, width, height);
      res.status(200).sendFile(thumbPath);
    }

  } catch (error: unknown) {
    res.status(500).send('Something broke!');
  }
});

export default images;
