"use client";

import React from "react";

export default function InteractiveCard({
  children,
  contentName,
  link,
}: {
  children: React.ReactNode;
  contentName: string;
  link: string;
}) {
  // function onCarSelected() {}
  // function onCardMouseAction(event: React.SyntheticEvent) {
  //   if (event.type == "mouseover") {
  //     event.currentTarget.classList.remove("shadow-lg");
  //     event.currentTarget.classList.add("shadow-2xl");
  //     event.currentTarget.classList.remove("bg-white");
  //     event.currentTarget.classList.add("bg-neutral-200");
  //   } else {
  //     //console.log('hhhhhhhhh')
  //     event.currentTarget.classList.remove("shadow-2xl");
  //     event.currentTarget.classList.add("shadow-lg");
  //     event.currentTarget.classList.add("bg-white");
  //     event.currentTarget.classList.remove("bg-neutral-200");
  //   }
  // }

  return (
    <div
      className="bg-white shadow-lg rounded-lg h-auto"
      // onClick={() => onCarSelected()}
      // onMouseOver={(e) => onCardMouseAction(e)}
      // onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
