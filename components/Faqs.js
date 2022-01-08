import Dropdown from './Dropdown';

function Faqs() {
  return (
    <div className="px-4 py-12 text-center">
      <div>
        <h2 className="text-3xl mb-4">FAQs</h2>
        <p>Most frequent questions about Find My Rank</p>
      </div>
      <div className="space-y-5 mt-8">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
}

export default Faqs;
