import Image from "next/image";
import Link from 'next/link';
import Navigation from "../components/Navigation";
import gitIcon from '../public/github.png';
import linkedIcon from '../public/linkedin.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Andy Nguyen Portfolio',
  description: 'My sketchbook',
};


export default function Home() {
  return (
    <main className="items-center main-container">

      <Navigation />
      <div className="sticky-note pb-3">
        <p className="text-center text-xl mb-5 font-bold">Welcome!</p>
        <p>My name is Andy and I am a Full Stack Web Developer that loves building apps.</p>
        <div className="flex flex-row mt-8">
          <a className="mr-5" target="_blank" href="https://www.linkedin.com/in/le-andrew-nguyen/">
          <Image
            src={linkedIcon}
            alt="LinkedIn"
            width={"50"}
          />
          </a>
          <a href="https://github.com/weboshi" target="_blank">
          <Image
            src={gitIcon}
            alt="Github"
            width={"50"}
          />
          </a>
        </div>
      </div>

      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="notebook-row"></div>
      <div className="red-divider"></div>
    </main>
  );
}
