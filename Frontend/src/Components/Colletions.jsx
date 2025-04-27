import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductItem from './ProductItem';

const Collections = ({ name, icon, link, description, products }) => {
  return (
    <div className="mt-5">
      <NavLink to={link} className="inline-flex gap-1 items-center">
        <p className="text-sm sm:text-lg font-serif font-bold">{name}</p>
        <img className="w-8" src={icon} alt={name} />
      </NavLink>
      <p className="mt-2 latest-collection-p sm:text-[17px] text-gray-800 text-[15px]">{description}</p>

      <div className="grid md:grid-cols-5 gap-5 mt-3 px-5 overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        {products.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-44 md:w-auto scroll-snap-align-start md:scroll-snap-none">
            <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} currency={item.currency} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
