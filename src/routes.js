import { Home, About, Contact } from './client/App';

export default [
  {
      path: "/",
      component: Home,
      exact: true,
  },
  {
      path: "/about",
      component: About,
      exact: true,
  },
  {
      path: "/contact",
      component: Contact,
      exact: true,
  }
];