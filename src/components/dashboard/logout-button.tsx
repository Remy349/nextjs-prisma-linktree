"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const handleLogout = () => {
    signOut();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};
