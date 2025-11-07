"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/images/logo.svg" alt="Not Found" width={50} height={50} />
      404 Not Found
      <Button
        variant="outline"
        className="mt-4 ml-2"
        onClick={() => (window.location.href = "/")}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
