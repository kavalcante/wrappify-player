/* global document */

import wrappify from './wrappify';
import SearchTrigger from './SearchTrigger';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

SearchTrigger();

const album = wrappify.album.getAlbum('6hPkbAV3ZXpGZBGUvL6jVM');
const albumInfo = document.getElementById('album-info');

const albumTracks = document.getElementById('album-tracks');

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
