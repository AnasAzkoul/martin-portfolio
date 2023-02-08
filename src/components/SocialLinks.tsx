import React from 'react';
import {socialLinks} from '@/utils/constants';

const SocialLinksList = () => {
  return (
    <ul className='flex gap-20'>
      {socialLinks.map((link) => {
        return <li key={link.id}>{link.icon}</li>;
      })}
    </ul>
  );
}

export default SocialLinksList; 
