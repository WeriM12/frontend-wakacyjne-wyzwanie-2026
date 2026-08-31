"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    // Blokujemy scroll strony pod modalem, dopóki jest otwarty
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div onClick={(event) => event.stopPropagation()} className="relative">
        {children}
        <button onClick={onClose} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-800 border flex items-center justify-center hover:bg-gray-700 cursor-pointer">
          ✕
        </button>
      </div>
    </div>
  );
}
