import { combineReducers } from 'redux';


const artistReducer = (state = [], action) => {
  ///console.log('artistReducer')
  switch (action.type) {
    case 'FETCH_ARTISTS':
      return action.payload;
    default:
      return state;
  }
};

const releaseReducer = (state = [], action) => {
  // console.log('releaseReducer')
  switch (action.type) {
    case 'FETCH_RELEASES':
      return action.payload;
    default:
      return state;
  }
};


const artistFmReducer = (state = [], action) => {

  switch (action.type) {
    case 'FETCH_ARTISTS_FM':
      return action.payload;
    default:
      return state;
  }
};

const FmFavoriteReducer = (state = [], action) => {
  // console.log('FmFavoriteReducer')
  switch (action.type) {
    case 'ARTIST_ADD_FM_FAVORITES':
      //console.log('ARTIST_ADD_FM_FAVORITES' + state)
      var exists = state.filter(rel => rel === action.payload);
      if (exists <= 0) {
        return [...state, action.payload];
      }
      else {
        return state;
      }
    case 'ARTIST_REMOVE_FM_FAVORITES':
      // console.log('ARTIST_REMOVE_FM_FAVORITES' + state)
      return state.filter(art => art !== action.payload);
    default:
      return state;
  }
};

const ReleaseFavoriteReducer = (state = [], action) => {
  //console.log('ReleaseFavoriteReducer')
  switch (action.type) {
    case 'RELEASE_ADD_FAVORITES':
      // console.log('RELEASE_ADD_FAVORITES' + state)
      var exists = state.filter(rel => rel === action.payload);
      if (exists <= 0) {
        return [...state, action.payload];
      }
      else {
        return state;
      }
    case 'RELEASE_REMOVE_FAVORITES':
      //console.log('RELEASE_REMOVE_FAVORITES' + state)
      return state.filter(rel => rel !== action.payload);
    default:
      return state;
  }
};

export default combineReducers({

  artists: artistReducer,
  releases: releaseReducer,
  artistsFm: artistFmReducer,
  fmFavorites: FmFavoriteReducer,
  releaseFavorites: ReleaseFavoriteReducer

});


