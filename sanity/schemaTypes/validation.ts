type MaybeLocalizedString = {
  en?: unknown;
  tr?: unknown;
};

export function requireLocalizedString(value: unknown) {
  const localized = value as MaybeLocalizedString | undefined;

  if (
    !localized ||
    typeof localized.en !== "string" ||
    localized.en.trim().length === 0 ||
    typeof localized.tr !== "string" ||
    localized.tr.trim().length === 0
  ) {
    return "English and Turkish fields are required.";
  }

  return true;
}