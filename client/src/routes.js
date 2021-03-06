import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';
import ProfilePage from './containers/ProfilePage';
import Analytics from './components/Analytics';
import ContactPage from './containers/ContactPage';
import AboutPage from './containers/AboutPage';
import SignLoginPage from './containers/SignLoginPage';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },
    {
    path: '/signlogin',
    component: SignLoginPage
    },
    {
      path: '/dashboard',
      component: DashboardPage
    },
    {
      path: '/contact',
      component: ContactPage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/profile',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, ProfilePage);
        } else {
          callback(null, HomePage);
        }
      }
    },
    {
        path: '/analytics',
        component: Analytics
      },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
