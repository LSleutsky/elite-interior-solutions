import { buildImageUrl, createSiteMeta, CreateMetaOptions } from "@elite/ui/utils";

import { siteConfig } from "@/config/site";

export const createMeta = (options: CreateMetaOptions) => createSiteMeta(siteConfig, options);

export const getImageUrl = (category: string, filename: string, width?: number) =>
  buildImageUrl(siteConfig, category, filename, width);

export {
  capitalizeFirst,
  capitalizeWords,
  formatPhoneNumber,
  getYearsOfExperience,
  validateEmail,
  validatePhone
} from "@elite/ui/utils";
