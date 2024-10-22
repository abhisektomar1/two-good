/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Page1() {
  const videoContainerRef = useRef<any>(null);
  const playButtonRef = useRef<any>(null);
  const h1Ref1 = useRef<any>(null);
  const h1Ref2 = useRef<any>(null);
  const videoref = useRef<any>(null);
  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const playButton = playButtonRef.current;

    const handleMouseEnter = () => {
      gsap.to(playButton, {
        scale: 1,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(playButton, {
        scale: 0,
        opacity: 0,
      });
    };

    const handleMouseMove = (event: any) => {
      gsap.to(playButton, {
        left: event.clientX - 70,
        top: event.clientY - 80,
      });
    };

    // Add event listeners
    videoContainer.addEventListener("mouseenter", handleMouseEnter);
    videoContainer.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listeners when the component is unmounted
    return () => {
      videoContainer.removeEventListener("mouseenter", handleMouseEnter);
      videoContainer.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const h1Elements = [h1Ref1.current, h1Ref2.current];

    gsap.from(h1Elements, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.9,
      stagger: 0.2, // This makes the second h1 animate after the first
    });

    gsap.from(videoref.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      delay: 1.5,
    });
  });
  return (
    <div className="min-h-screen relative w-full px-[1vw] pt-[20vh]">
      <h1
        ref={h1Ref1}
        className="text-[10vh] md:text-[15.8vw] uppercase font-futura leading-[14vw] tracking-[-1.9px] font-extrabold "
      >
        Change
      </h1>
      <h1
        ref={h1Ref2}
        className="text-[10vh] md:text-[15.8vw] uppercase font-futura leading-[14vw] tracking-[-1.9px] font-extrabold mt-[-10px] md:mt-[-20px]"
      >
        the course
      </h1>
      <div ref={videoref} className="relative h-[50vh] md:h-screen bg-gray-500 w-full mt-2">
        <div
          ref={playButtonRef}
          className="p-[3vw] px-[2.6vw] bg-black text-white text-[1.3vw] fixed uppercase font-Futura rounded-full opacity-0 scale-0"
        >
          play
        </div>
        <video
          ref={videoContainerRef}
          className="h-full w-full object-cover"
            autoPlay
            loop
          muted
          src="/video.mp4"
        ></video>
      </div>
    </div>
  );
}

export default Page1;
