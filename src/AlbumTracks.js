export default function renderAlbumTracks(data, element) {
  const markup = data
    .map(track => `<div class="music" data-track-preview="${track.preview_url}">
          <p class="music-number">${track.track_number}</p>
          <p class="music-title">${track.name}</p>
          <p class="music-duration">3:08</p>
        </div>`).join('');

  element.innerHTML = markup;
}
