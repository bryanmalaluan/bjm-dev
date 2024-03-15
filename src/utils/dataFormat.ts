const SITE_URLS = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  instagram: "https://www.instagram.com/",
};

export const formatSiteText = (url: string, type: keyof typeof SITE_URLS) => {
  switch (type) {
    case "github":
      return url.replace(SITE_URLS[type], "/");
    case "linkedin":
      return url.replace(SITE_URLS[type], "/");
    case "instagram":
      return url.replace(SITE_URLS[type], "@");

    default:
      return "";
  }
};
