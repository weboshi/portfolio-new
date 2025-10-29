'use client';

import Image from "next/image";
import Link from 'next/link';
import gitIcon from '../public/github.png';
import linkedIcon from '../public/linkedin.png';
import { useEffect, useRef } from 'react';
import Vara from 'vara';

export default function Home() {
  const varaContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && varaContainerRef.current) {
      // Clear any existing content
      const container = varaContainerRef.current;
      container.innerHTML = '';

      // Check if mobile
      const isMobile = window.innerWidth < 1024;
      const text = isMobile ? "Welcome!" : "Welcome to Le Andrew's Portfolio!";

      new Vara(
        '#vara-container',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
        [
          {
            text: text,
            fontSize: 32,
            strokeWidth: 2,
            color: '#000',
            duration: isMobile ? 2000 : 3000,
          },
        ]
      );
    }
  }, []);

  return (
    <main className="items-center main-container">
      <div className="sticky-note pb-3">
        <div id="vara-container" ref={varaContainerRef} className="text-center mb-5" style={{ minHeight: '50px' }}></div>
        <p className="hidden lg:block">I am a Full Stack Web Developer that loves building apps.</p>
        <p className="block lg:hidden">My name is Andy and I am a Full Stack Web Developer that loves building apps.</p>
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

      <div className="red-divider"></div>
    </main>
  );
}
