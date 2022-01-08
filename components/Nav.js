import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/findmyrank.svg';
import burger from '../public/images/svgs/burger.svg';

function Nav() {
  const [hide, setHide] = useState(true);
  return (
    <nav
      className="
          relative
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-2
          px-4
          md:px-8
          text-lg text-gray-700
          bg-white
        "
    >
      {/* Logo */}
      <div>
        <Link href="/">
          <a className="p-0 m-0">
            <Image src={logo} width={150} />
          </a>
        </Link>
      </div>

      {/* Burger Icon */}
      <div className={'md:hidden'} onClick={() => setHide(!hide)}>
        <Image src={burger} width={0} height={0} />
      </div>

      {/* Menu */}
      <div
        className={`${
          hide ? 'hidden' : ''
        } absolute md:static w-full md:flex md:items-center md:w-auto top-12 -left-0 z-10 bg-white drop-shadow-lg md:drop-shadow-none rounded px-2`}
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0
              space-y-2
              md:space-y-0"
        >
          <li>
            <a className="md:p-4 py-2 block hover:text-[#363876]" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-[#363876]" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-[#363876]" href="#">
              Customers
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-[#363876]" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-[#363876]" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
