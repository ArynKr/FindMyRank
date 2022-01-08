import Image from 'next/image';
import { useState } from 'react';
import downIcon from '../public/images/svgs/down.svg';

function Dropdown() {
  const [drop, setDrop] = useState(false);
  return (
    <div className="text-left border-[3px] rounded-lg transition-all duration-500 select-none">
      <div className="cursor-pointer" onClick={() => setDrop(!drop)}>
        <div className="flex px-4 py-3 justify-between font-semibold">
          <p>What is the matter ?</p>
          <Image
            src={downIcon}
            className={drop ? 'rotate-180 transition-all duration-500' : ''}
          />
        </div>
      </div>
      <div
        className={`${
          drop ? 'max-h-48 px-4 py-3' : 'max-h-0'
        } transition-all duration-500 flex justify-between overflow-hidden`}
      >
        <p className="">
          This is the answer. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolorum quidem blanditiis provident quia cum labore et eius
          distinctio enim neque.
        </p>
      </div>
    </div>
  );
}

export default Dropdown;
