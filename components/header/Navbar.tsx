"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "./ModeToggle";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">hicking</HoveredLink>
            <HoveredLink href="/interface-design">town tour</HoveredLink>
            <HoveredLink href="/seo">donation</HoveredLink>
            <HoveredLink href="/branding">expolring</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="exploring">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Mt Kilimanjaro"
              href="/kilimanjaro"
              src="https://img.freepik.com/free-photo/beautiful-scenery-yellow-tents-kilimanjaro-national-park_181624-36749.jpg?t=st=1715021325~exp=1715024925~hmac=8fa51f3ab7d450501cf24dc5131931a67788b1b0696c2296aada0b274b11c26d&w=826"
              description="hike and explore mountain kilimanjaro."
            />
            <ProductItem
              title="Ngorongoro creater"
              href="/ngorongoro"
              src="https://img.freepik.com/free-photo/gazelle-herd-resting-dried-tree-savanna-landscape_181624-8828.jpg?t=st=1715021546~exp=1715025146~hmac=40a911e89ea4bf9e068d0bb8b944e02aef5e6a205c84fa80eef57d180cdd7663&w=826"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Serengeti"
              href="/serengeti"
              src="https://img.freepik.com/free-photo/selective-focus-shot-little-grant-s-gazelle-also-known-as-nanger-granti-tanzania_181624-60525.jpg?t=st=1715022195~exp=1715025795~hmac=e00518c546ca949d50561d98cdd269b70edd9955a4edc45a2ca2a6e3e910bc65&w=826"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            {/* <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            /> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="mode">
          <ModeToggle/>
          </MenuItem> */}
      </Menu>
    </div>
  );
}
