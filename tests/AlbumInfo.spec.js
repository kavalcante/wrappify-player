/* global describe it document */
import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumInfo from '../src/AlbumInfo';

const data = {
  album_type: 'album',
  artists: [
    {
      name: 'Linkin Park',
    },
  ],
  id: '6hPkbAV3ZXpGZBGUvL6jVM',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/66ff51342a9b250bf5b998fd0ec8e977671468bc',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/9b5e12a4d057a8b4313842ee481a9d8ea82945cd',
      width: 64,
    },
  ],
  name: 'Hybrid Theory (Bonus Track Version)',
  type: 'album',
  tracks: {
    total: 18,
  },
};

const markup = `<img class="album-image" src="https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec" alt="Hybrid Theory (Bonus Track Version)">
        <p class="album-title">Hybrid Theory (Bonus Track Version)</p>
        <p class="album-artist">Linkin Park</p>
        <p class="album-counter">18 Músicas</p>`;

describe('AlbumInfo', () => {
  it('should exist', () => expect(renderAlbumInfo).to.exist);

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should return the data', () => {
    const element2 = document.createElement('div');

    expect(renderAlbumInfo(data, element2)).to.be.eql(data);
  });
});
