export const SITE = {
  brand: "Power Book",
  parent: "Kamlesh Group",
  phoneDisplay: "98117 00286",
  phoneFull: "+919811700286",
  landline: "011-403-478-51",
  landlineTel: "01140347851",
  email: "contact@kamleshgroup.com",
};

export function wa(message: string): string {
  return `https://wa.me/919811700286?text=${encodeURIComponent(message)}`;
}
