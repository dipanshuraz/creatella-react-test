import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './types';

let initialState = {
  loading: true,
  products: [],
  error: '',
  end: false,
  sort: '',
  page: 0,
};

const products = (state = initialState, action) => {
  const result = action.payload;

  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        products:
          action.sort !== state.sort
            ? (state.products = [...result])
            : [...state.products, ...result],
        sort: action.sort,
        end: action.end,
        page: action.sort !== state.sort ? 0 : action.page,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Error Occured !',
        page: action.page,
      };
    default:
      return state;
  }
};

export default products;
