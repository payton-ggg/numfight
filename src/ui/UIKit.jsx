// UI Kit: reusable components for consistent design across pages
import { useRef, useState } from "react";
import NumericKeyboard from "../components/Keyboard/NumericKeyboard";

// StatChip: pill-like chip to display small stats
export const StatChip = ({ children, variant = "emerald" }) => {
  const map = {
    emerald: "bg-emerald-100 text-emerald-800 border border-emerald-500",
    orange: "bg-orange-100 text-orange-800 border border-orange-400",
    indigo: "bg-indigo-100 text-indigo-800 border border-indigo-400",
    sky: "bg-sky-100 text-sky-800 border border-sky-400",
    slate: "bg-slate-100 text-slate-800 border border-slate-400",
  };
  const cls = `rounded-full px-3 py-1 text-sm md:text-base ${
    map[variant] ?? map.slate
  }`;
  return <span className={cls}>{children}</span>;
};

// PageHeader: title + chips row + optional progress bar
export const PageHeader = ({ title, chips = [], progress }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 md:gap-3">
      <div className="text-center text-2xl md:text-4xl font-semibold">
        {title}
      </div>
      {chips.length > 0 && (
        <div className="flex items-center gap-2 md:gap-4 mt-1 flex-wrap justify-center">
          {chips.map((chip, idx) => (
            <StatChip key={idx} variant={chip.variant}>
              {chip.text}
            </StatChip>
          ))}
        </div>
      )}
      {typeof progress === "number" && (
        <div className="w-full max-w-lg mt-2">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-emerald-500 rounded-full transition-all"
              style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// ExpressionCard: panel containing large math expression
export const ExpressionCard = ({ children, variant = "glass" }) => {
  const variantCls =
    variant === "gradient"
      ? "rounded-2xl shadow-lg px-6 py-6 text-center border-2 border-slate-700 bg-gradient-to-br from-[#a4e2de] to-[#65aabc]"
      : "border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg px-6 py-6 text-center";
  return (
    <div className="mt-4 w-full max-w-xl">
      <div className={variantCls}>{children}</div>
    </div>
  );
};

// InputPanel: input + on-screen keyboard + primary action button
export const InputPanel = ({
  value,
  onChange,
  onEnter,
  placeholder = "Enter answer...",
  allowNegative = true,
  color = "emerald",
  inputKeyDown,
  buttonLabel = "Submit",
}) => {
  const colorMap = {
    emerald: {
      input:
        "placeholder:text-emerald-500 border-emerald-400 focus:border-emerald-500 hover:border-emerald-600",
      btn: "bg-emerald-500 hover:bg-emerald-600",
    },
    sky: {
      input:
        "placeholder:text-sky-600 border-sky-400 focus:border-sky-500 hover:border-sky-600",
      btn: "bg-sky-500 hover:bg-sky-600",
    },
    indigo: {
      input:
        "placeholder:text-indigo-600 border-indigo-400 focus:border-indigo-500 hover:border-indigo-600",
      btn: "bg-indigo-500 hover:bg-indigo-600",
    },
  };
  const c = colorMap[color] ?? colorMap.emerald;

  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleKeyDown = (e) => {
    // allow custom handler
    if (typeof inputKeyDown === "function") inputKeyDown(e);

    const k = e.key;
    const v = `${value ?? ""}`;

    // Digits (including numpad)
    if (/^[0-9]$/.test(k)) {
      e.preventDefault();
      onChange?.(v + k);
      return;
    }
    // Backspace
    if (k === "Backspace") {
      e.preventDefault();
      onChange?.(v.slice(0, -1));
      return;
    }
    // Delete clears
    if (k === "Delete") {
      e.preventDefault();
      onChange?.("");
      return;
    }
    // Minus toggle
    if (k === "-" && allowNegative) {
      e.preventDefault();
      if (!v) onChange?.("-");
      else if (v.startsWith("-")) onChange?.(v.slice(1));
      else onChange?.("-" + v);
      return;
    }
    // Enter submits
    if (k === "Enter") {
      e.preventDefault();
      onEnter?.();
      return;
    }
  };

  return (
    <div className="mt-4 w-full text-center max-w-md bg-[#f8f3e8] border border-slate-300 rounded-xl shadow-md p-3 md:p-4">
      <input
        ref={inputRef}
        className={`w-full bg-transparent text-slate-800 text-base md:text-sm rounded-md px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow border ${c.input}`}
        placeholder={placeholder}
        type="number"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <div className="mt-2 flex justify-center">
        <NumericKeyboard
          value={value}
          onChange={onChange}
          onEnter={onEnter}
          allowNegative={allowNegative}
        />
      </div>
      <button
        type="button"
        className={`text-white font-semibold py-2 px-5 rounded-lg inline-flex items-center mt-3 shadow-md border border-slate-700 transition-colors ${c.btn}`}
        onClick={onEnter}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default {
  StatChip,
  PageHeader,
  ExpressionCard,
  InputPanel,
};
