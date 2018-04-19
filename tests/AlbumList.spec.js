/* global describe it document */
import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbums from '../src/AlbumList';

const data = [
  {
    album_type: 'album',
    artists: [
      {
        name: 'Linkin Park',
      },
    ],
    id: '6peEdPVO73WtgGah5sEhX4',
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
  },
];

const data2 = [
  {
    album_type: 'album',
    artists: [
      {
        name: 'Linkin Park',
      },
    ],
    id: '6peEdPVO73WtgGah5sEhX4',
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
  },
  {
    album_type: 'album',
    artists: [
      {
        name: 'Linkin Park',
      },
    ],
    id: '6peEdPVO73WtgGah5sEhX4',
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
  },
];

const markup = `<div class="list-item" data-album-id="${data[0].id}">
    <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image" data-album-id="${data[0].id}">
    <div class="list-description" data-album-id="${data[0].id}">
      <p class="list-title" data-album-id="${data[0].id}">${data[0].name}</p>
      <p class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</p>
    </div>
  </div>`;

const markup2 = `<div class="list-item" data-album-id="${data[0].id}">
    <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image" data-album-id="${data[0].id}">
    <div class="list-description" data-album-id="${data[0].id}">
      <p class="list-title" data-album-id="${data[0].id}">${data[0].name}</p>
      <p class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</p>
    </div>
  </div><div class="list-item" data-album-id="${data[0].id}">
    <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image" data-album-id="${data[0].id}">
    <div class="list-description" data-album-id="${data[0].id}">
      <p class="list-title" data-album-id="${data[0].id}">${data[0].name}</p>
      <p class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</p>
    </div>
  </div>`;

describe('AlbumList', () => {
  it('should exist', () => expect(renderAlbums).to.exist);

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbums(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append when more than 1 album', () => {
    const element = document.createElement('div');
    renderAlbums(data2, element);

    expect(element.innerHTML).to.be.eql(markup2);
  });
});
