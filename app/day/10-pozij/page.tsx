import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
      <div className="text-center text-4xl font-bold">Dzień 10</div>
      <div className="text-center text-2xl font-bold">
        <Link href="https://en.wikipedia.org/wiki/Wow!_signal">
          <span className="">Wow!</span>
        </Link>
      </div>
    </div>
  );
}
