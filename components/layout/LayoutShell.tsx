"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      
      <Navbar />

      <main className="flex-1 pt-14 pb-16">
        {children}
      </main>

      <footer className="z-20">
        @MM
      </footer>

    </div>
  );
}