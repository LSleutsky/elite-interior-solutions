import { SiteConfig } from "@elite/ui/types";

export interface CreateMetaOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const IMAGEKIT_URL_ENDPOINT = "https://ik.imagekit.io/titan";
// May 1st, 1987
const FOUNDED_DATE = new Date(1987, 4, 1);

export const getYearsOfExperience = (): number => {
  const now = new Date();

  return (
    now.getFullYear() -
    FOUNDED_DATE.getFullYear() -
    (now < new Date(now.getFullYear(), 4, 1) ? 1 : 0)
  );
};

export const capitalizeWords = (str: string): string =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const capitalizeFirst = (string: string): string => {
  if (!string) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 0) {
    return "";
  }

  if (digits.length <= 3) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export const validateEmail = (email: string): boolean => {
  if (!email) {
    return true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");

  return digits.length === 10;
};

export const buildImageUrl = (
  config: SiteConfig,
  category: string,
  filename: string,
  width?: number
): string => {
  const transform = width ? `tr:w-${width}` : "";

  return `${IMAGEKIT_URL_ENDPOINT}/${transform}/${config.imageKitFolder}/${category}/${filename}`;
};

export const createSiteMeta = (
  config: SiteConfig,
  { title, description, path = "", image = config.defaultOgImage }: CreateMetaOptions
) => {
  const url = `${config.baseUrl}/${path}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: config.brandName },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image }
  ];
};
