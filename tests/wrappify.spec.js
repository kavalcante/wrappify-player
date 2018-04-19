/* global describe it */

import { expect } from 'chai';
import Wrappify from '../src/wrappify';

describe('Wrappify', () => {
  it('should be an object', () => expect(Wrappify).to.be.an.object);
  it('should have search methods', () => expect(Wrappify.search).to.exist);
  it('should have album methods', () => expect(Wrappify.album).to.exist);
});
