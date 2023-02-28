"use client";

import React, { useEffect } from "react";

function Navbar() {
  const [userData, setUserData] = React.useState({});

  useEffect(() => {
    // Get user data from cookies
    const cookies = document.cookie.split("; ");
    const userData = cookies.reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      return { ...acc, [key]: value };
    }, {});
    setUserData(userData);
    console.log(userData);
  }, []);

  return (
    <header className="bg-blue-50">
      {/* Nav Menu */}
      <nav className="container flex mx-auto px-4 lg:px-8">
        {/* Logo */}
        <a className="py-4 inline-block" href="/">
          <p>Logo</p>
        </a>

        {/* Nav Links */}
        <ul className="ml-auto flex items-center">
          <li>
            <a className="flex items-center p-4" href="/register">
              Register
            </a>
          </li>
          <li>
            <a className="flex items-center p-4" href="/login">
              Login
            </a>
          </li>
          <li>
            <button className="flex items-center p-4 bg-transparent">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
