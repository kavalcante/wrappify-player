/* global document */

import wrappify from './wrappify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = wrappify.search.albums('Linkin Park');
const albumList = document.getElementById('album-list');

const album = wrappify.album.getAlbum('6hPkbAV3ZXpGZBGUvL6jVM');
const albumInfo = document.getElementById('album-info');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo));
