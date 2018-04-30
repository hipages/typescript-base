import { InceptumApp, WebPlugin } from 'inceptum';
import * as path from 'path';

const app = new InceptumApp();
app.use(new WebPlugin());
app.addDirectory(path.join(__dirname, 'controller'));
app.addDirectory(path.join(__dirname, 'service'));
app.start();
