import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { fetchAds } from '../redux/ads/action';
import { timeDifference } from '../utils/utils';

const AdItem = ({ ads }) => {
  return (
    <div className="frostBox" style={{ height: 250 }}>
      <img src={ads} alt="img" style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

const List = ({ products, ads }) => {
  let indexAds = 1;
  return (
    <div className="grid">
      {products !== null &&
        products.map((product, index) => {
          return (
            <>
              <div className="" key={index}>
                <Item
                  size={product.size}
                  face={product.face}
                  price={product.price}
                  date={timeDifference(new Date(product.date))}
                />
              </div>
              {(index + 1) % 20 === 0 && indexAds && (
                <div className={` ` + indexAds} key={'ads-' + index}>
                  <AdItem ads={ads[indexAds++]} />
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ads: state.ads.ads,
  };
};

export default connect(mapStateToProps, { fetchAds })(List);
