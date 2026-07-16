document.addEventListener('DOMContentLoaded', () => {
  const places = window.TRAVEL_PLACES || [];
  const mapView = document.querySelector('.map-view');
  const gallery = document.querySelector('#place-gallery');
  const markerLayer = document.querySelector('#map-markers');
  const emptyState = document.querySelector('#map-empty');
  const backButton = document.querySelector('#back-to-map');
  const photoGrid = document.querySelector('#travel-photos');
  const lightbox = document.querySelector('#photo-lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');

  document.querySelector('#place-count').textContent = places.length;
  document.querySelector('#photo-count').textContent = places.reduce((sum, place) => sum + place.photos.length, 0);
  emptyState.hidden = places.length > 0;

  const pinPosition = (lat, lng) => ({
    left: `${((lng + 180) / 360) * 100}%`,
    top: `${((90 - lat) / 180) * 100}%`
  });

  const openLightbox = photo => {
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.alt || '';
    lightboxCaption.textContent = photo.caption || '';
    lightbox.showModal();
  };

  const openPlace = (place, updateHistory = true) => {
    document.querySelector('#place-title').textContent = place.city;
    const placeLocations = document.querySelector('#place-locations');
    placeLocations.textContent = (place.cities || []).join(' · ');
    placeLocations.hidden = !place.cities?.length;
    document.querySelector('#place-date').textContent = place.date || '';
    const notes = document.querySelector('#place-notes');
    notes.replaceChildren();
    if (place.noteLead) {
      const lead = document.createElement('p');
      lead.className = 'note-lead';
      const emphasis = document.createElement('em');
      emphasis.textContent = place.noteLead;
      lead.append(emphasis);
      notes.append(lead);
    }
    (place.notes || []).forEach(text => {
      const paragraph = document.createElement('p');
      let cursor = 0;
      for (const match of text.matchAll(/\*([^*]+)\*/g)) {
        paragraph.append(document.createTextNode(text.slice(cursor, match.index)));
        const emphasis = document.createElement('em');
        emphasis.textContent = match[1];
        paragraph.append(emphasis);
        cursor = match.index + match[0].length;
      }
      paragraph.append(document.createTextNode(text.slice(cursor)));
      notes.append(paragraph);
    });
    photoGrid.replaceChildren();

    if (!place.photos.length) {
      const emptyGallery = document.createElement('div');
      emptyGallery.className = 'place-gallery-empty';
      emptyGallery.innerHTML = '<span>＋</span><h2>Photographs coming soon.</h2><p>This place is pinned and ready for its first memories.</p>';
      photoGrid.append(emptyGallery);
    }

    place.photos.forEach((photo, index) => {
      const figure = document.createElement('figure');
      figure.className = `travel-photo ${photo.orientation || ''}`.trim();
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Open photograph ${index + 1}${photo.caption ? `: ${photo.caption}` : ''}`);
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.alt || '';
      image.loading = 'lazy';
      image.decoding = 'async';
      button.append(image);
      button.addEventListener('click', () => openLightbox(photo));
      figure.append(button);
      photoGrid.append(figure);
    });

    mapView.hidden = true;
    gallery.hidden = false;
    document.body.classList.add('gallery-open');
    if (updateHistory) history.pushState({ place: place.id }, '', `#${place.id}`);
    scrollTo({ top: 0, behavior: 'auto' });
    backButton.focus({ preventScroll: true });
  };

  const closePlace = (updateHistory = true) => {
    gallery.hidden = true;
    mapView.hidden = false;
    document.body.classList.remove('gallery-open');
    if (updateHistory) history.pushState({}, '', location.pathname);
    scrollTo({ top: 0, behavior: 'auto' });
  };

  places.forEach((place, index) => {
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.className = 'map-marker';
    marker.style.left = pinPosition(place.lat, place.lng).left;
    marker.style.top = pinPosition(place.lat, place.lng).top;
    marker.style.setProperty('--delay', `${index * 180}ms`);
    marker.setAttribute('aria-label', `Open ${place.city} gallery, ${place.photos.length} photographs`);
    const cover = place.cover || place.photos[0]?.src;
    const placeLabel = place.city === place.country ? place.city : `${place.city} · ${place.country}`;
    marker.innerHTML = `<span class="pin-dot"></span><span class="pin-label">${cover ? `<img src="${cover}" alt="" loading="lazy">` : ''}<strong>${placeLabel}</strong></span>`;
    marker.addEventListener('click', () => openPlace(place));
    markerLayer.append(marker);
  });

  backButton.addEventListener('click', () => closePlace());
  const moveGallery = direction => photoGrid.scrollBy({ left: direction * photoGrid.clientWidth * .78, behavior: 'smooth' });
  photoGrid.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      photoGrid.scrollLeft += event.deltaY;
    }
  }, { passive: false });
  photoGrid.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') moveGallery(-1);
    if (event.key === 'ArrowRight') moveGallery(1);
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  window.addEventListener('popstate', event => {
    const place = places.find(item => item.id === event.state?.place || `#${item.id}` === location.hash);
    if (place) openPlace(place, false); else closePlace(false);
  });

  const initialPlace = places.find(place => `#${place.id}` === location.hash);
  if (initialPlace) openPlace(initialPlace, false);
});
