import { Fragment } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { useAuthDispatch, useAuthState } from '../context/auth';

import RedditLogo from '../../public/images/reddit.svg';

const Navbar: React.FC = () => {
  const { authenticated, loading } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    axios
      .get('/auth/logout')
      .then(() => {
        dispatch('LOGOUT');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      {/* Logo and title */}
      <div className="flex items-center">
        <Link href="/">
          <a>
            <RedditLogo className="w-8 h-8 mr-2" />
          </a>
        </Link>
        <span className="text-2xl font-semibold">
          <Link href="/">readit</Link>
        </span>
      </div>
      {/* Search Input */}
      <div className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
        <i className="pl-4 pr-3 text-gray-400 fas fa-search"></i>
        <input
          type="text"
          className="py-1 pr-3 bg-transparent rounded focus:outline-none w-160"
          placeholder="Search"
        />
      </div>
      {/* Auth buttons */}
      <div className="flex">
        {!loading &&
          (authenticated ? (
            <button
              onClick={logout}
              className="w-32 py-1 mr-4 leading-5 outlined blue button"
            >
              Logout
            </button>
          ) : (
            <Fragment>
              <Link href="/login">
                <a className="w-32 py-1 mr-4 leading-5 outlined blue button">
                  Login
                </a>
              </Link>
              <Link href="/register">
                <a className="w-32 py-1 mr-4 leading-5 blue button">Register</a>
              </Link>
            </Fragment>
          ))}
      </div>
    </div>
  );
};
export default Navbar;
