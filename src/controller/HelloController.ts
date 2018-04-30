import { WebDecorator, Autowire } from 'inceptum';
import { HelloSayerService } from '../service/HelloSayerService';

export class HelloController {

  @Autowire('HelloSayerService')
  helloSayerService: HelloSayerService;

  @WebDecorator.Get('/hi/:name')
  sayHi(req, res) {
    res.send(this.helloSayerService.sayHi(req.params.name));
  }
}
