"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in:", { email, password });
    // Implementasi login
  };

  return (
    <>
      <Card className="w-[450px] shadow-none bg-[#D5D4C3]">
        <CardHeader>
          <CardTitle>LOG IN</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="gap-[28px] flex flex-col">
            <div className="flex flex-col gap-1">
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <Label className="flex items-center gap-2">
                  <Image
                    src="/images/icons/lock.svg"
                    alt="Lock Icon"
                    width={16}
                    height={16}
                  />
                  <span>Password</span>
                  <Link
                    href="/auth/forgot-password"
                    className="text-blue-500 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </Label>
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <hr className="" />
            <p>OR</p>
            <hr />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
