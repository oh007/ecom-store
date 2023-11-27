import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa, faCcMastercard, faPaypal, faApplePay } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
   <div className='p-8 border-b border-gray-200 w-4/5 m-auto'>
        <h4 className='font-bold'>Ditt Ikea +</h4>
      </div>
      <div className='p-8 border-b border-gray-200 w-4/5 m-auto'>
        <h4 className='font-bold'>Handla på Ikea +</h4>
      </div>
      <div className='p-8 border-b border-gray-200 w-4/5 m-auto'>
        <h4 className='font-bold'>Kundservice</h4>
      </div>
      <div className='p-8 border-b border-gray-200 w-4/5 m-auto'>
        <h4 className='font-bold'>Detta är Ikea +</h4>
      </div>

      <div className="social-icons flex flex-row">
        <ul className='flex flex-row gap-6 m-auto p-8'>
        <FontAwesomeIcon icon={faFacebook} size='xl' />
        <FontAwesomeIcon icon={faTwitter} size='xl'/>
        <FontAwesomeIcon icon={faInstagram} size='xl'/>
        <FontAwesomeIcon icon={faLinkedin} size='xl'/>
        <FontAwesomeIcon icon={faPinterest} size='xl' />
        </ul>
      </div>

      <div className="payment-icons flex flex-row">
      <ul className='flex flex-row gap-6 m-auto p-8'>
      <FontAwesomeIcon icon={faCcVisa} size='lg'/>
        <FontAwesomeIcon icon={faCcMastercard} size='lg'/>
        <FontAwesomeIcon icon={faPaypal} size='lg'/>
        <FontAwesomeIcon icon={faApplePay} size='lg'/>
        </ul>
      </div>
      <div className="copyright">
       <p className='font-thin text-center'> &copy; Olof-Hag 2023 - This is <strong>NOT</strong> an official site for IKEA, just a prototype site of an e-commerce site</p>
      </div>
    </footer>
  );
}
