// A reusable on-screen numeric keyboard for mobile users
// Props:
// - value: current input string
// - onChange: function(newValue: string)
// - onEnter: function() -> called when Enter is pressed
// - allowNegative: boolean (default: true)
// - className: optional extra classes
const NumericKeyboard = ({
  value = "",
  onChange,
  onEnter,
  allowNegative = true,
  className = "",
}) => {
  const handleAppend = (ch) => {
    if (!onChange) return;
    const next = `${value ?? ""}` + ch;
    onChange(next);
  };

  const handleBackspace = () => {
    if (!onChange) return;
    const v = `${value ?? ""}`;
    onChange(v.slice(0, -1));
  };

  const handleClear = () => {
    if (!onChange) return;
    onChange("");
  };

  const handleToggleMinus = () => {
    if (!onChange || !allowNegative) return;
    const v = `${value ?? ""}`;
    if (!v) {
      onChange("-");
      return;
    }
    if (v.startsWith("-")) onChange(v.slice(1));
    else onChange("-" + v);
  };

  const Button = ({ label, onClick, variant = "default" }) => {
    const base =
      "text-lg md:text-xl font-semibold py-2 md:py-3 rounded-md transition-colors duration-200 select-none w-full";
    const colors =
      variant === "action"
        ? "bg-green-400 hover:bg-green-600 text-gray-800"
        : variant === "danger"
        ? "bg-red-400 hover:bg-red-600 text-gray-800"
        : "bg-zinc-200 hover:bg-zinc-300 text-gray-800 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600";

    return (
      <button type="button" className={`${base} ${colors}`} onClick={onClick}>
        {label}
      </button>
    );
  };

  return (
    <div className={`w-full max-w-sm mt-3 ${className}`}>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <Button key={n} label={n} onClick={() => handleAppend(String(n))} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        <Button label={0} onClick={() => handleAppend("0")} />
        {allowNegative ? (
          <Button label="±" onClick={handleToggleMinus} />
        ) : (
          <div className="py-2 md:py-3" />
        )}
        <Button label="⌫" onClick={handleBackspace} />
        <Button label="C" onClick={handleClear} variant="danger" />
      </div>
    </div>
  );
};

export default NumericKeyboard;
