import Tiles from "@/components/tiles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
      <Tiles />
    </div>
  );
}
