import React from 'react';
import flats from 'src/data/flats.js';


// List patterns
const FlatList = (props) => {
  return(
    <div className="flat-list">
    {props.flats.map((flat)=> {
      return <Flat key={flat.id} name={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} lng={flat.lng}/>;


    })}


    </div>

    );
};


export default FlatList;


//solution
import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />

        );
    });
  };
  return (
    <div className="flat-list">
      {renderList()}
    </div>
    );
};

export default FlatList;
