// components/popup/PopupProvider.tsx

"use client";

import { usePathname } from "next/navigation";
import { popups } from "../../config/popups";
import SitePopup from "./SitePopup";

export default function PopupProvider() {
  const pathname = usePathname();

  const activePopup = popups.find((popup) =>
    popup.routes.includes(pathname)
  );

  if (!activePopup) return null;

  return <SitePopup popup={activePopup} />;
}