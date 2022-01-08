import Number from './Number';

function Numbers() {
  return (
    <div className="space-y-4 bg-[#363876] px-4 py-12 text-center text-white flex flex-col">
      <Number number="6" word="Tools" />
      <Number number="100" word="Users" />
      <Number number="1K" word="Predictions" />
    </div>
  );
}

export default Numbers;
