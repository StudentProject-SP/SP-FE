import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <nav className="h-13 box-border flex w-full items-center justify-center p-4">
      <div className="flex w-[60%] justify-between">
        <Image alt="logo" src="/images/soup.png" width={57} height={30} />
        <p className="text-text-light hover:text-text-dark cursor-pointer text-sm">
          로그인/회원가입
        </p>
      </div>
    </nav>
  );
}
