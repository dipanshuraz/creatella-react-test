import React, { useRef, useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { fetchAds } from '../redux/ads/action';
import { fetchProducts } from '../redux/product/action';
import LoaderGif from './LoaderGif';

const Products = ({ fetchProducts, fetchAds, errors, products, end, sort }) => {
  let initialPage = 1;
  const [page, setPage] = useState(initialPage);

  const load = () => {
    setPage(page + 1);
  };

  const loader = useRef(load);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 0 }
    )
  );

  const [element, setElement] = useState(null);

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    fetchProducts(page);
    fetchAds();
  }, [page]);

  const handleSort = (event) => {
    const value = event.target.value;
    if (sort !== value) {
      fetchProducts(1, value);
    }
  };

  useEffect(() => {
    const header = document.getElementById('myHeader');
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <Fragment>
      <header
        id="myHeader"
        className="header col-md-12 pt-3  mb-4"
        style={{ zIndex: 100 }}
      >
        <form>
          <div className="form-group d-flex">
            <select
              className="form-control"
              onChange={(event) => handleSort(event)}
              name="sort"
            >
              <option value="price">price</option>
              <option value="size">size</option>
              <option value="id" selected>
                id
              </option>
            </select>
          </div>
        </form>
      </header>

      {errors && <h1>{errors}</h1>}

      <div className="container mt-4">
        <List products={products} />

        {!end && (
          <div ref={setElement} className="py-4 my-4 text-center">
            <LoaderGif />
          </div>
        )}

        {end && (
          <div
            style={{ height: '200px' }}
            className="d-flex justify-content-center align-items-center"
          >
            <h4 className=" w-100 text-center frostBox py-4">
              {' '}
              ~ end of catalogue ~{' '}
            </h4>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    sort: state.products.sort,
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error,
    end: state.products.end,
    ads: state.ads.ads,
    page: state.products.page,
  };
};

export default connect(mapStateToProps, { fetchAds, fetchProducts })(Products);
