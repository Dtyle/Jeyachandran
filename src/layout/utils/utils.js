// This is a simple `cn` utility for className management
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
