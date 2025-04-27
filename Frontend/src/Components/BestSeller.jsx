import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { asset } from '../assets/books/asset';
import { ShopContext } from '../Contex/ShopContex';
import Collections from './Colletions';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const categories = [
      { 
        name: "DRESS", key: 'dress', link: '/dcollection', icon: asset.drr, 
        description: "Elegant wizarding attire crafted to enchant every occasion with style and magic."
      },
      { 
        name: "BOOKS", key: 'books', link: '/bcollections', icon: asset.sb, 
        description: "Explore the most cherished spellbooks and tales, handpicked by magical experts to ignite your imagination."
      },
      { 
        name: "JEWELLERY", key: 'jewellery', link: '/jcollections', icon: asset.r1, 
        description: "Enchanting jewellery designed to add a touch of magic and elegance to your everyday life."
      },
      { 
        name: "WANDS", key: 'wands', link: '/wcollections', icon: asset.mw, 
        description: "Masterfully crafted wands chosen by wizards and witches for their unmatched power and elegance."
      }
    ];

    const bestproducts = categories.map((category) => ({
      ...category,
      products: products.filter((item) => item.category.includes(category.key) && item.bestseller).slice(0, 5)
    }));

    setBestseller(bestproducts);
  }, [products]);

  return (
    <div className=''>
      <div className="text-center">
        <Title text1={'Recently Sold'} text2={'Magical Treasures'} /> 🏰
        <p className="latest-collection-p sm:text-[17px] text-gray-800 text-[15px] font-light">
          Discover the latest magical items purchased by wizards and witches across the realm!
        </p>
       
      </div>

      {bestseller.map((category, index) => (
        <Collections 
          key={index} 
          name={category.name} 
          icon={category.icon} 
          link={category.link} 
          description={category.description} 
          products={category.products}
        />
      ))}
    </div>
  );
};

export default BestSeller;
