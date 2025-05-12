import TwitGenerator from "./components/TwitGenerator";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative min-h-[100vh] h-full flex justify-center items-center bg-black">
      <TwitGenerator />
    </div>
  );
}
