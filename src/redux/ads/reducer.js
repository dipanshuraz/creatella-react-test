import { FETCH_ADS_ERROR, FETCH_ADS_SUCCESS } from './types';

let initialState = {
  loading: true,
  ads: ['0'],
  error: '',
};

const ads = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case FETCH_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        ads: [...state.ads, payload],
      };

    case FETCH_ADS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default ads;
