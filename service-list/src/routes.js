import { Router } from 'express';

import ProviderController from './app/controller/ProviderController';


const routes = new Router();

routes.get('/', ProviderController.index);

export default routes;
