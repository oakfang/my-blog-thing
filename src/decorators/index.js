import { CompositeDecorator } from 'draft-js';
import { helloDecorator } from './hello';

export default new CompositeDecorator([helloDecorator]);
