"use client"
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import '../app/styles/global.css';
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef(null);
  const [showDiv, setShowDiv] = useState(false); // State to control the visibility of the div
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Autoplay was prevented:', error);
      });
    }

    // Show the div after 10 seconds
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 1000);

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <main>
      <section>
        <video autoPlay loop muted playsInline ref={videoRef} className="background-clip">
          <source src="/background-clip3.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="trafficrules">
        <div class="text-wrapper">
          <h1 class="right"> ⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦</h1> 
          <h1 class="right"> ⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦</h1> 
          <h1 class="right"> ⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦</h1> 
          <h1 class="right"> ⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦</h1> 
          <h1 class="right"> ⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦⚠️⛔🚦</h1> 
        </div>
      </section>

      {showDiv && (
        <div className="topDiv">
          <p>Sadak Soochak</p>
        </div>
      )}
    </main>
  );
}
