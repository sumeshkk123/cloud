"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface GoBackButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function GoBackButton({ 
  variant = "outline", 
  size = "lg",
  className 
}: GoBackButtonProps) {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Button
      onClick={handleGoBack}
      variant={variant}
      size={size}
      className={className}
    >
      <ArrowLeft className="mr-2 h-5 w-5" aria-hidden />
      Go Back
    </Button>
  );
}
