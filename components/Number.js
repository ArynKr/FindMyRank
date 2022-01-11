function Number({ number, word }) {
  return (
    <div className="py-4 lg:p-0">
      <h3 className="text-6xl xl:text-6xl">{number}+</h3>
      <p className="pt-4 text-lg lg:text-xl">{word}</p>
    </div>
  );
}

export default Number;
