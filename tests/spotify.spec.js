/* global describe it */

import { expect } from 'chai';
import Spotify from '../src/spotify';

describe('Spotify', () => {
  it('should be an object', () => expect(Spotify).to.be.an.object);
  it('should have search methods', () => expect(Spotify.search).to.exist);
  it('should have album methods', () => expect(Spotify.album).to.exist);
});
