"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "mt Kilimanjaro",
    description:
      "hike and enjoy the weaher and get a chance to get to the peek on mt kilimanjaro",
    link: "/",
  },
  {
    title: "wild life tourism", 
    description:
      "having moment with friend or famly",
    link: "/",
  },
  {
    title: "village tour",
    description:
      "get a chance to interact with people in africa vilage and get to know their life",
    link: "/",
  },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
];
