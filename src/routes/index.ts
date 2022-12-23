import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send(
    'Visit http://localhost:3000/api/images?filename=?&width=?&height=?\n replacing ? with values in order to resize image'
  );
});

routes.use('/images', images);

export default routes;
