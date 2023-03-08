"use client";

import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

function Navbar() {
  const [userData, setUserData] = React.useState<any>({});

  const handleLogout = () => {
    // Remove token from cookies
    document.cookie = "token=deleted; path=/; max-age=0";
    // Redirect to home page
    window.location.href = "/";
  };

  useEffect(() => {
    // Get user data from cookies
    const cookies = document.cookie.split("; ");
    const userData = cookies.reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      return { ...acc, [key]: value };
    }, {});
    setUserData(userData);
  }, []);

  return (
    <header>
      {/* Nav Menu and Nav Bar for desktop */}
      <nav className="hidden container mx-auto px-4 lg:flex lg:px-8">
        {/* Logo */}
        <a className="py-4 inline-block" href="/">
          <p>Logo</p>
        </a>

        {/* Nav Links */}
        <ul className="ml-auto flex items-center">
          {userData.token ? (
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-4 bg-transparent"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>

      {/* Nav Bar for Mobile */}
      <div className="flex justify-between container mx-auto px-4 pt-2 lg:hidden">
        <button>Menu</button>

        {/* Profile Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden p-2 bg-white shadow-lg">
          <UserOutlined className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
