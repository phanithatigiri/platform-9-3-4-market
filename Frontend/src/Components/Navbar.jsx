import React, { useContext, useState } from 'react';
import { asset } from '../assets/books/asset';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { jasset } from '../assets/TopSection/Topasset';
import { ShopContext } from '../Contex/ShopContex';

const Navbar = () => {
  const [visable, setvisable] = useState(false);
  const { setshowsearch, showsearch, getcount, navigate, token, settoken, setcartitems } = useContext(ShopContext);

  const categories = [
    { link: '/dcollection', name: 'Dress' },
    { link: '/bcollections', name: 'Books' },
    { link: '/wcollections', name: 'Wands' },
    { link: '/jcollections', name: 'Jewellery' },
  ];

  const logoutfun = () => {
    navigate('/login');
    localStorage.removeItem('token');
    settoken('');
    setcartitems({});
  };

  return (
    <div className="sticky top-0 z-50 bg-white flex justify-between items-center rounded-md py-2 px-1 border-b-[1px] border-gray-300 pb-4">
      <NavLink to="/">
        <h1 className="magic-text text-[24px] md:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-green-500  bg-clip-text font-">
          Platform 9¾ Market
        </h1>
        <p className="hidden md:block text-sm font-semibold">✨ Step In, Dress Up, Spell On ✨</p>
      </NavLink>

      <ul className="hidden md:flex items-center gap-10 justify-between">
        {categories.map((items, index) => (
          <NavLink key={index} to={items.link} className="group relative">
            <p className="font-serif font-semibold text-gray-600">{items.name}</p>
            <hr className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-300 absolute bottom-[-5px] left-0" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-2 md:gap-5">
        <div className="mr-2">
          <img
            className="w-4 md:w-5 cursor-pointer hover:scale-110 transition ease-in-out"
            onClick={() => setshowsearch(!showsearch)}
            src={asset.search1}
            alt="Search"
          />
        </div>

        {/* Profile */}
        <div className="relative group">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className="cursor-pointer w-6 md:w-8 hover:scale-110 transition ease-in-out"
            src={asset.P}
            alt="Profile"
          />
          {token && (
            <div className="hidden md:group-hover:block absolute bg-gray-50 right-0 rounded-lg shadow-lg dropdown-menu">
              <div className="flex flex-col gap-2 py-2 px-6">
                <p className="cursor-pointer hover:font-bold">Profile</p>
                <p onClick={() => navigate('/morders')} className="cursor-pointer hover:font-bold">
                  Orders
                </p>
                <p onClick={() => logoutfun()} className="cursor-pointer hover:font-bold">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="relative">
          <NavLink to="/mcart">
            <img
              className="w-[35px] md:w-10 hover:scale-110 transition ease-in-out"
              src={asset.cart3}
              alt="Cart"
            />
            <p className="magic-text absolute right-[-3px] bottom-[-3px] border text-[10px] md:text-[13px] rounded-full w-[18px] md:w-6 text-center bg-orange-500 text-white tracking-widest">
              {getcount()}
            </p>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="z-50">
          <img
            onClick={() => setvisable(true)}
            src={asset.menu1}
            className="w-12 sm:hidden cursor-pointer"
            alt="Menu"
          />
          <div
            className={`fixed top-0 left-0 h-full bg-white transition-all duration-300 ${
              visable ? 'w-3/4' : 'w-0'
            } z-50 overflow-y-auto`}
          >
            <div className="flex flex-col mt-5 ml-2 gap-2 cursor-pointer">
              <div className="flex items-center gap-2 mt-6" onClick={() => setvisable(false)}>
                <img className="w-4 rotate-180" src={asset.back} alt="Back" />
                <p>Back</p>
              </div>

              <div className="border py-2 px-2 font-serif">
                <NavLink to="/" onClick={() => setvisable(false)}>
                  Home
                </NavLink>
              </div>

              <div className="flex flex-col font-serif">
                {jasset.map((menu, index) => (
                  <div key={menu.link} className="border">
                    <NavLink
                      to={`/${menu.link}`}
                      onClick={() => setvisable(false)}
                      className="flex items-center gap-2 py-1 px-1"
                    >
                      <img src={menu.image} className="rounded-full w-10" alt={menu.name} />
                      <p>{menu.name}</p>
                    </NavLink>
                  </div>
                ))}
              </div>
               {token &&<div className="border py-2 px-2 font-serif">
                <p onClick={() => logoutfun()} className="cursor-pointer hover:font-bold">
                  Logout
                </p>
              </div>}
            </div>
          </div>
          {visable && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setvisable(false)}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;