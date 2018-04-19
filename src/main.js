/* global document */

import wrappify from './wrappify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = wrappify.search.albums('Linkin Park');
const albumList = document.getElementById('album-list');

const album = wrappify.album.getAlbum('6hPkbAV3ZXpGZBGUvL6jVM');
const albumInfo = document.getElementById('album-info');

const albumTracks = document.getElementById('album-tracks');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
