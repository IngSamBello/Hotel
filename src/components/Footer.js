import React from 'react';
import LogoWhite from '../assets/images/hotels/LogoWhite.png'
const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className='container mx-auto text-white flex justify-between'>
    <a href='/'>
  <img className='w-[150px] transition-all duration-500' src={LogoWhite} alt='' />
</a>
      
      Copyright &copy; 2025. All rights reserved.
    </div>
  </footer>;
};

export default Footer;
