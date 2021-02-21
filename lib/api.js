export const getStrapiUrl = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
};

export const getStrapiMedia = (media) => {
  if (media) {
    return media.url.startsWith("/") ? getStrapiUrl(media.url) : media.url;
  }
  throw new Error("No Image Source");
};

export const fetchApi = async (path) => {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl);
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
