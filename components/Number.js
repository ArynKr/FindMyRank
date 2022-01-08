function Number({ number, word }) {
  return (
    <div className="py-4">
      <h3 className="text-6xl">{number}+</h3>
      <p className="pt-4 text-lg">{word}</p>
    </div>
  );
}

export default Number;
