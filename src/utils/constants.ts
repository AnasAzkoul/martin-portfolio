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
