import Dropdown from './Dropdown';

function Faqs() {
  return (
    <div className="px-4 md:px-12 xl:px-24 py-12 xl:pb-32 xl:pt-24 text-center">
      <div>
        <h2 className="text-3xl mb-4 lg:text-[2.5em] lg:mb-8 ">FAQs</h2>
        <p>Most frequent questions about Find My Rank</p>
      </div>
      <div className="space-y-5 lg:space-y-8 mt-8 lg:mt-12">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
}

export default Faqs;
