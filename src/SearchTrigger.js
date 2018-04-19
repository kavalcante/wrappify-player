/* global document */

import wrappify from './wrappify';
import renderAlbums from './AlbumList';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

function makeRequest() {
  return wrappify.search.albums(searchInput.value)
    .then(data => renderAlbums(data.albums.items, albumList));
}

export default function searchTrigger() {
  searchInput.addEventListener('input', (e) => {
    e.preventDefault();
    return makeRequest();
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    return makeRequest();
  });
}
