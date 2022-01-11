import {
  Facebook,
  FacebookRounded,
  Google,
  Twitter,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

import fb from '../public/images/svgs/fb.svg';

function Footer() {
  return (
    <footer className="footer-1 bg-gray-100 px-4 md:px-12 xl:px-24 py-12 xl:py-24">
      <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div className="px-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <h5 className="text-xl font-bold mb-6">Engineering Tools</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                JEE Main Rank Predictor
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                JEE Main Percentile Calculator
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                JEE Main Marks to Percentile Calculator
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                JEE Main Percentile to Marks Calculator
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                JEE Advance Rank Predictor
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 lg:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 className="text-xl font-bold mb-6">Medical Tools</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                NEET Rank Predictor
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                NEET College Predictor
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 lg:w-1/4 xl:w-1/6 mt-8 lg:mt-0">
          <h5 className="text-xl font-bold mb-6">About</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                Our Team
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                Privacy
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 lg:w-1/4 xl:w-1/6 mt-8 lg:mt-0">
          <h5 className="text-xl font-bold mb-6">Help</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                Support
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:border-[#363876] hover:text-[#363876]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-8 sm:mt-16 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
            Stay connected
          </h5>
          <div className="w-32 sm:mx-auto flex justify-between sm:justify-between xl:mx-0">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/findmyrank"
              title="Follow on Facebook"
              className="w-8 h-8 cursor-pointer transition-all duration-500 hover:scale-[1.3] hover:text-[#4267B2]"
            >
              <Facebook />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/findmyrank"
              title="Follow on Twitter"
              className="w-8 h-8 cursor-pointer transition-all duration-500 hover:scale-[1.3] hover:text-[#1DA1F2]"
            >
              <Twitter />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/find-my-rank"
              title="Follow on LinkedIn"
              className="w-8 h-8 cursor-pointer transition-all duration-500 hover:scale-[1.3] hover:text-[#DB4437]"
            >
              <Google />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
