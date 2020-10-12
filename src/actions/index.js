import musicBrainz from '../apis/MusicBrainz';
import lastFm from '../apis/Lastfm'

const LASTFM_API_KEY = 'e5ddb66865acd1d8f23027dc571f193f';


export const fetchArtists = artistName => async dispatch => {

  // console.log('dispatch fetchArtists')
  if (artistName) {
    const response = await musicBrainz.get(`/artist/?query=artist:${artistName}`);
    dispatch({ type: 'FETCH_ARTISTS', payload: response.data.artists });
  }
};

export const fetchReleases = artistId => async dispatch => {

  //console.log('dispatch fetchReleases')
  const response = await musicBrainz.get(`/recording/?query=arid:${artistId}`);
  dispatch({ type: 'FETCH_RELEASES', payload: response.data.recordings });
};


export const fetchArtistsFm = artistName => async dispatch => {

  if (artistName) {
    //console.log('dispatch fetchArtistsFm' + LASTFM_API_KEY)
    const response = await lastFm.get(`?method=artist.search&artist=${artistName}&api_key=${LASTFM_API_KEY}&format=json`);
    dispatch({ type: 'FETCH_ARTISTS_FM', payload: response.data.results.artistmatches.artist });
  }
};


export const addFavoriteArtistFm = artist => {
  // Return an action
  return {
    type: 'ARTIST_ADD_FM_FAVORITES',
    payload: artist
  };
};


export const removeFavoriteArtistFm = artist => {
  // Return an action
  return {
    type: 'ARTIST_REMOVE_FM_FAVORITES',
    payload: artist
  };
};

export const addFavoriteRelease = release => {
  // Return an action
  return {
    type: 'RELEASE_ADD_FAVORITES',
    payload: release
  };
};


export const removeFavoriteRelease = release => {
  // Return an action
  return {
    type: 'RELEASE_REMOVE_FAVORITES',
    payload: release
  };
};

