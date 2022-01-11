import Number from './Number';

function Numbers() {
  return (
    <div className="space-y-4 bg-[#363876] px-4 md:px-12 py-12 text-center text-white flex flex-col lg:flex-row lg:space-y-0 lg:justify-between lg:px-[20vw] lg:h-[50vh] lg:py-[10vh] lg:items-center">
      <Number number="6" word="Tools" />
      <Number number="100" word="Users" />
      <Number number="1K" word="Predictions" />
    </div>
  );
}

export default Numbers;
