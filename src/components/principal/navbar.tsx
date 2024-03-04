import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="w-full z-50 fixed top-0 left-0 bg-white border-b">
      <nav className="flex items-center justify-between h-16 px-6 sm:max-w-5xl sm:mx-auto">
        <Link href="/" className="font-bold text-2xl">
          Linktree
        </Link>
        <div>
          <ul className="flex gap-3 items-center">
            <li>
              <Button variant="secondary" asChild>
                <Link href="/auth/sign-in">Sign In</Link>
              </Button>
            </li>
            <li>
              <Button asChild>
                <Link href="/auth/sign-up">Sign Up</Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
