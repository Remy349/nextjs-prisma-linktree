import Link from "next/link";
import { LogoutButton } from "@/components/dashboard/logout-button";

export const Navbar = () => {
  return (
    <header className="w-full z-50 fixed top-0 left-0 bg-white border-b">
      <nav className="flex items-center justify-between h-16 px-6 sm:max-w-5xl sm:mx-auto">
        <Link href="/dashboard" className="font-bold text-2xl">
          Linktree
        </Link>
        <div>
          <ul className="flex gap-3 items-center">
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
