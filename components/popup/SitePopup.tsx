// components/popup/SitePopup.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { PopupConfig } from "@/config/popups";

type SitePopupProps = {
  popup: PopupConfig;
};

export default function SitePopup({ popup }: SitePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storageKey = `popup-seen-${popup.id}`;
    const hasSeenPopup = sessionStorage.getItem(storageKey);

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, popup.delay ?? 800);

      return () => clearTimeout(timer);
    }
  }, [popup.id, popup.delay]);

  function closePopup() {
    const storageKey = `popup-seen-${popup.id}`;
    sessionStorage.setItem(storageKey, "true");
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-neutral-900 shadow"
          aria-label="Popup kapat"
        >
          <X size={20} />
        </button>

        {popup.image && (
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={popup.image}
              alt={popup.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="p-6 text-center">
          <h2 className="font-serif text-3xl text-neutral-950">
            {popup.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-neutral-600">
            {popup.description}
          </p>

          {popup.buttonText && popup.buttonHref && (
            <a
              href={popup.buttonHref}
              onClick={closePopup}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              {popup.buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}