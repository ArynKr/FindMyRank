import Image from 'next/image';
import hero from '../public/images/svgs/hero.svg';
import Button from './Button';

function Header() {
  return (
    <div className="px-4">
      <div className="hero_img">
        <Image src={hero} />
      </div>
      <div className="hero_text my-4">
        <h2 className="text-2xl">Find your estimated rank</h2>
        <p className="mt-2">
          Rank Predictor by Find my rank helps students get their probable rank
          based on the expected exam score. Candidates can use the answer key of
          JEE and NEET to calculate their approximate score before the
          declaration of JEE Main 2021 result.
        </p>
        <div className="space-y-2 mt-4">
          <Button text="Tools" />
          <Button text="Ask Us" />
        </div>
      </div>
    </div>
  );
}

export default Header;
