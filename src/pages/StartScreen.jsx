import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { PageHeader, StatChip } from "../ui/UIKit";

const StartScreen = () => {
  return (
    <Layout>
      <PageHeader
        title="Choose a mode"
        chips={[
          { text: "7 modes", variant: "sky" },
          { text: "Practice & challenge", variant: "indigo" },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Marathon */}
        <div className="group border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 hover:shadow-xl transition">
          <div className="text-2xl font-semibold text-slate-800">
            Marathon 🏃
          </div>
          <p className="mt-2 text-slate-700">
            Solve 20 problems as fast as you can. Test your speed and accuracy!
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 text-white bg-emerald-500 hover:bg-emerald-600 border border-slate-700 py-2 px-4 rounded-lg"
            to="/marathon"
          >
            Play
          </Link>
        </div>

        {/* Free mode */}
        <div className="group border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 hover:shadow-xl transition">
          <div className="text-2xl font-semibold text-slate-800">
            Free Mode 🔓
          </div>
          <p className="mt-2 text-slate-700">
            No timer or limits — just solve problems and rack up a high score.
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 text-white bg-indigo-500 hover:bg-indigo-600 border border-slate-700 py-2 px-4 rounded-lg"
            to="/free"
          >
            Play
          </Link>
        </div>

        {/* Timeless */}
        <div className="group border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 hover:shadow-xl transition">
          <div className="text-2xl font-semibold text-slate-800">
            Minute Mode ⏰
          </div>
          <p className="mt-2 text-slate-700">
            You have 60 seconds to solve as many problems as possible. Time
            starts now!
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 text-white bg-sky-500 hover:bg-sky-600 border border-slate-700 py-2 px-4 rounded-lg"
            to="/timeless"
          >
            Play
          </Link>
        </div>

        {/* Extra Time / Survival */}
        <div className="group border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 hover:shadow-xl transition">
          <div className="text-2xl font-semibold text-slate-800">
            Survival 🛡️
          </div>
          <p className="mt-2 text-slate-700">
            Start with 10 seconds. +3.5 seconds for each correct answer. How
            long can you last?
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 border border-slate-700 py-2 px-4 rounded-lg"
            to="/extra-time"
          >
            Play
          </Link>
        </div>

        {/* Multiplication */}
        <div className="group border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 hover:shadow-xl transition">
          <div className="text-2xl font-semibold text-slate-800">
            Multiplication ✖️
          </div>
          <p className="mt-2 text-slate-700">
            Only multiplication problems. Perfect for practicing the times
            tables!
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 text-white bg-violet-500 hover:bg-violet-600 border border-slate-700 py-2 px-4 rounded-lg"
            to="/multiplication"
          >
            Play
          </Link>
        </div>

        {/* Math Blitz / Fold */}
        <div className="group border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 hover:shadow-xl transition">
          <div className="text-2xl font-semibold text-slate-800">Blitz ⚡</div>
          <p className="mt-2 text-slate-700">
            A new expression appears every 5 seconds. After 10 rounds, enter the
            final answer!
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 text-white bg-cyan-500 hover:bg-cyan-600 border border-slate-700 py-2 px-4 rounded-lg"
            to="/fold"
          >
            Play
          </Link>
        </div>

        {/* Quadratic */}
        <div className="group border-2 border-slate-700 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 hover:shadow-xl transition">
          <div className="text-2xl font-semibold text-slate-800">
            Quadratic Equations ➗
          </div>
          <p className="mt-2 text-slate-700">
            Solve ax² + bx + c = 0 with integer roots. Enter both answers!
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 text-white bg-rose-500 hover:bg-rose-600 border border-slate-700 py-2 px-4 rounded-lg"
            to="/quadratic"
          >
            Play
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default StartScreen;
