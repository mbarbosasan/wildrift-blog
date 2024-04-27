export const SkillBar = ({ value, maxValue, type, children }) => {
  const bars = [];

  for (let i = 1; i <= maxValue; i++) {
    bars.push(
      <div
        key={i}
        className={`w-[60px] h-2 border border-stone-500 ${i <= value ? "bg-cyan-300" : "bg-black"}`}
      ></div>,
    );
  }

  return (
    <>
      {children}
      <ul className="flex gap-1">
        {bars.map((bar, index) => (
          <li key={index}>{bar}</li>
        ))}
      </ul>
    </>
  );
};
