import express from 'express';
import path from 'path';
import { resizeImage } from '../../../utils/resizer';
import fs from 'fs';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response, next): Promise<void> => {
    try {
      //get url params filename, width, height
      const filename: string = req.query.filename as unknown as string;
      const width: number = parseInt(req.query.width as unknown as string);
      const height: number = parseInt(req.query.height as unknown as string);

      const originalPath: string = path.resolve(
        `public/assets/original/${filename}.jpg`
      );

      if(!fs.existsSync(originalPath)){
        res.status(404).send(`File ${filename} does not exist in storage`);
      }

      const thumbPath: string = path.resolve(
        `public/assets/thumb/${filename}${width}x${height}_thumb.jpg`
      );

      if (fs.existsSync(thumbPath)) {
        //if processed image exists, send
        res.status(200).sendFile(thumbPath);
      } else {
        await resizeImage(filename, width, height); //otherwise, process then send
        res.status(200).sendFile(thumbPath);
      }
    } catch (err) {
      if (err instanceof Error) {
        next(err.message);
      }
    }
  }
);

export default images;
