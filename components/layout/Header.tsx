// components/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/context/AppContext";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const { user } = useAppContext();

  return (
    <header
      className={cn(
        "w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-amber-600">KLINIK 3D</div>
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              {NAVIGATION_ITEMS.filter((item) => item.label !== "SIGN IN/UP").map(
                (item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200 px-3 py-2"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
              <NavigationMenuItem>
                {user ? (
                  <UserButton />
                ) : (
                  <SignInButton mode="modal">
                    <Button
                      className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200 px-3 py-2 bg-transparent border-none shadow-none"
                    >
                      SIGN IN/UP
                    </Button>
                  </SignInButton>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
