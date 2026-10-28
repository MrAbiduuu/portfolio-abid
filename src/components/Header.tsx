import Navbar from "./Navbar";
import ThemeController from "./ThemeController";

export default function Header() {
  return (
    <header className="relative z-50 flex h-16 items-center justify-between border-b border-base-300 bg-base-100 px-6">
      <h1 className="text-2xl font-bold">
        mr.{" "}
        <span className="bg-linear-to-r from-primary via-lime-400 to-emerald-500 bg-clip-text font-extrabold text-transparent">
          _Abiduuu_
        </span>
      </h1>

      <Navbar />
      <ThemeController />
    </header>
  );
}
