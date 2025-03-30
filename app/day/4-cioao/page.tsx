// 112358

import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
      <div className="text-center text-4xl font-bold">Dzień 4</div>
      <div>
        <Image src="/images/fibonaci.jpg" alt="day4" width={300} height={300} />
        <p className="text-center text-2xl font-bold">_ _ _ _ _ _</p>
      </div>
    </div>
  );
}
