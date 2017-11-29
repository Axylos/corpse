import Home from './components/main/home';
import About from './components/main/about';

const locations = [
  {
    label: 'Home',
    icon: 'home',
    url: '/',
    component: Home,
  },
  {
    label: 'Write With Strangers',
    icon: 'live_help',
    url: '/',
  },
  {
    label: 'Write With Friends',
    icon: 'group',
    url: '/',
  },
  {
    label: 'Resources',
    icon: 'link',
    url: '/',
  },
  {
    label: 'Peruse The Poems',
    icon: 'search',
    url: '/',
  },
  {
    label: 'Best Of',
    icon: 'star',
    url: '/',
  },
  {
    label: 'Contact',
    icon: 'email',
    url: '/contact',
  },
  {
    label: 'About',
    icon: 'info',
    url: '/about',
    component: About,
  }
]

export default locations;
