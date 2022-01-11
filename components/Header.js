import Image from 'next/image';
import hero from '../public/images/svgs/hero.svg';
import Button from './Button';

function Header() {
  return (
    <div className="px-4 md:px-12 xl:px-24 py-[14vh] my-12 lg:flex">
      <div className="hero_img px-16 text-center w-[100%] lg:order-last">
        <Image src={hero} />
      </div>
      <div className="hero_text w-[95%] my-8">
        <h1 className="text-2xl lg:text-[2em] lg:mb-8">
          Find your estimated rank
        </h1>
        <p className="mt-2">
          Rank Predictor by Find my rank helps students get their probable rank
          based on the expected exam score. Candidates can use the answer key of
          JEE and NEET to calculate their approximate score before the
          declaration of JEE Main 2021 result.
        </p>
        <div className="space-y-4 mt-8 lg:flex lg:space-y-0 lg:space-x-4">
          <Button text="Tools" />
          <Button text="Ask Us" bg="light" />
        </div>
      </div>
    </div>
  );
}

export default Header;
