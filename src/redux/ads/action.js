import { FETCH_ADS_SUCCESS, FETCH_ADS_ERROR } from './types';
const BaseUrl = 'http://localhost:3000/';

export const fetchAds = () => (dispatch) => {
  let r = Math.floor(Math.random() * 1000);

  fetch(BaseUrl + 'ads?r=' + r)
    .then((result) => {
      if (result.status === 200) {
        dispatch(fetchAdsSuccess(result.url));
      }
    })
    .catch((error) => {
      dispatch(fetchAdsFailure(error));
    });
};

export const fetchAdsSuccess = (payload) => ({
  type: FETCH_ADS_SUCCESS,
  payload,
});

export const fetchAdsFailure = (payload) => ({
  type: FETCH_ADS_ERROR,
  payload,
});
