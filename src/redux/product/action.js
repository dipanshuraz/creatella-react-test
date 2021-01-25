import axios from 'axios';
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './types';
const BaseUrl = 'http://localhost:3000/';

export const fetchProducts = (page = 1, sort) => (dispatch) => {
  axios
    .get(BaseUrl + `api/products?_limit=20&_page=${page}&_sort=${sort}`)
    .then((res) => {
      let data = res.data;
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data,
        sort: sort,
        end: data.length ? false : true,
        page: page,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: error,
        page: page,
      });
    });
};
