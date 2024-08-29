import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="w-ful">
      <header>
        <div className="md:flex md:flex-row rounded-t-xl gap-3 space-y-3 md:justify-between md:h-20 h-28 px-10 bg-black text-slate-200 md:items-center items-center justify-center flex flex-col">
          <Link to="/" className="text-sm md:text-xl"><b>Abstract</b> | Help Center</Link>
          <Link
            to="/create-card"
            className="border text-sm md:text-sm border-gray-600 p-1 rounded-md shadow shadow-blue-200"
          >
            Submit a request | create a new card
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
