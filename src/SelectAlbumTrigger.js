/* global document */

import wrappify from './wrappify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

function makeRequest(albumId) {
  return wrappify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    const target = e.target;

    makeRequest(target.getAttribute('data-album-id'));
  });
}
