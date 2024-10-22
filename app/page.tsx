/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function Home() {

  const scrollRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, 
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);
  return (
    <div ref={scrollRef} data-scroll-container>
     <Page1 />
     <Page2 />
     <Page3 />
    </div>
  );
}
