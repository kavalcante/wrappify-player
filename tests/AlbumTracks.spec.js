/* global describe it document */
import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';

const data = [
  {
    preview_url: 'https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 1,
    name: 'Papercut',
    duration_ms: 184866,
  },
];

const data2 = [
  {
    preview_url: 'https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 1,
    name: 'Papercut',
    duration_ms: 184866,
  },
  {
    preview_url: 'https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 1,
    name: 'Papercut',
    duration_ms: 184866,
  },
];

const markup = `<div class="music" data-track-preview="https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=774b29d4f13844c495f206cafdad9c86">
          <p class="music-number">1</p>
          <p class="music-title">Papercut</p>
          <p class="music-duration">3:08</p>
        </div>`;

const markup2 = `<div class="music" data-track-preview="https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=774b29d4f13844c495f206cafdad9c86">
          <p class="music-number">1</p>
          <p class="music-title">Papercut</p>
          <p class="music-duration">3:08</p>
        </div><div class="music" data-track-preview="https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=774b29d4f13844c495f206cafdad9c86">
          <p class="music-number">1</p>
          <p class="music-title">Papercut</p>
          <p class="music-duration">3:08</p>
        </div>`;

describe('AlbumTracks', () => {
  it('should exist', () => expect(renderAlbumTracks).to.exist);

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should and append the markup when more than 1 item', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
