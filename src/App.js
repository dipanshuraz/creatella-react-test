import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Products from './components/Products';
import ScrollArrow from './components/ScrollArrow';

const App = ({ ads }) => {
  return (
    <div className="container-fluid" style={{ position: 'relative' }}>
      <div className="row">
        <header className="col-md-12 header mb-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 py-4">
              <h1>Products Grid</h1>

              <p>
                Here you're sure to find a bargain on some of the finest ascii
                available to purchase. Be sure to peruse our selection of ascii
                faces in an exciting range of sizes and prices.
              </p>

              <p>But first, a word from our sponsors:</p>
            </div>

            <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                alt="ads"
                className="frostBox"
                src={ads[1]}
                style={{
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderStyle: 'solid',
                }}
              />
            </div>
          </div>
        </header>
      </div>
      <div className="row justify-content-center">
        <Products />
      </div>
      <div
        className=""
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1000 }}>
        <ScrollArrow />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ads: state.ads.ads,
});

export default connect(mapStateToProps, {})(App);
