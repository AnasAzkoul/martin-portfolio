import {BsStackOverflow} from 'react-icons/bs'; 
import {IoLogoBitbucket} from 'react-icons/io'; 
import {SiResearchgate} from 'react-icons/si';
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'; 
import {FiTwitter} from 'react-icons/fi'; 

export type Link = {
  id: number
  text: string
  url: string
}

export const navLinks:Link[] = [
  {id: 1, text: 'home', url: '/'}, 
  {id: 2, text: 'about me', url: '/about'}, 
  {id: 3, text: 'research', url: '/research'}, 
  {id: 4, text: 'contact', url: '/contact'}, 
]

type SocialLinkTypes = {
  id: number, 
  icon: JSX.Element
  name: string
}


export const socialLinks: SocialLinkTypes[] = [
  {
    id: 1,
    icon: <BsStackOverflow className='hover:scale-125 transition-all duration-300 ease-in hover:text-orange text-4xl'/>,
    name: 'Stack Overflow'
  }, 
  {
    id: 2,
    icon: <IoLogoBitbucket className='hover:scale-125 transition-all duration-300 ease-in hover:text-orange text-4xl'/>,
    name: 'Bit Bucket'
  }, 
  {
    id: 3,
    icon: <SiResearchgate className='hover:scale-125 transition-all duration-300 ease-in hover:text-orange text-4xl'/>,
    name: 'Research Gate'
  }, 
  {
    id: 4,
    icon: <AiFillGithub className='hover:scale-125 transition-all duration-300 ease-in hover:text-orange text-4xl'/>,
    name: 'Github'
  }, 
  {
    id: 5,
    icon: <AiOutlineLinkedin className='hover:scale-125 transition-all duration-300 ease-in hover:text-orange text-4xl'/>,
    name: 'Linkedin'
  }, 
  {
    id: 6,
    icon: <FiTwitter className='hover:scale-125 transition-all duration-300 ease-in hover:text-orange text-4xl'/>,
    name: 'Twitter'
  }, 
  {
    id: 7,
    icon: <AiOutlineMail className='hover:scale-125 transition-all duration-300 ease-in hover:text-orange text-4xl'/>,
    name: 'email'
  }, 
]
