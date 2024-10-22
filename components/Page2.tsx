import React from "react";
import Image from "next/image";
import "locomotive-scroll/dist/locomotive-scroll.css";

const items = [
  {
    id: 1,
    name: "Item 1",
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format",
  },
  {
    id: 2,
    name: "Item 2",
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format",
  },
  {
    id: 3,
    name: "Item 3",
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format",
  },
];

const Page2 = () => {


  return (
    <div
      className="h-screen w-full overflow-hidden"
    >
      <div className="md:flex md:justify-between md:items-center p-4 h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="h-screen bg-red-600 md:w-[30%] py-4"
            data-scroll
            data-scroll-speed="1"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={600}
              height={800}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
