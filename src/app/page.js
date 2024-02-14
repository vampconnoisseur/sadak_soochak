"use client"
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import '../app/styles/global.css';
import React, { useEffect, useRef  } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <main>
      <section>
      <video autoPlay loop muted playsInline ref={videoRef} className="background-clip">
            <source src="/background-clip.mp4" type="video/mp4" />
          </video>
        <nav>
          <div className="navbar">
            <Link href="/"> 
                    <img className="icon-tag" src="/icon.jpg" alt="fghj"/>
            </Link>
            <ul>
              <li>
              <Link href="/">
                  home
                </Link>
              </li>
              <li>
              <Link href="/">
                Traffic <br/> rules
                </Link>
              </li>
              <li>
                <RegisterLink>Sign up</RegisterLink>
              </li>
              <li>
                <LoginLink>Sign in</LoginLink>
              </li>
              <li>
              <Link href="/">
                About <br/> us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

      </section>
      
      
    </main>
  );
}

