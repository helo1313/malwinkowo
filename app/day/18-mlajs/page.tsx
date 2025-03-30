export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
      <div className="text-center text-4xl font-bold">Dzień 18</div>
      <div className="text-center text-2xl font-bold">
        <p>{`for (let i = 0; i < 9; i += 2)`} </p>
        <p>{`{`} </p>
        <p>{`console.log(i)`} </p>
        <p>{`}`} </p>
      </div>
    </div>
  );
}
