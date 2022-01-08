function Button({ text, bg, fw }) {
  if (!fw) fw = 'normal';
  return (
    <button
      className={`p-2 ${
        bg == 'light'
          ? 'bg-[#ffffff] text-[#363876]'
          : 'bg-[#363876] text-white'
      } font-${fw}
      w-full rounded-md`}
    >
      {text}
    </button>
  );
}

export default Button;
