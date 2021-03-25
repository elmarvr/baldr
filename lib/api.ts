export const getApiUrl = (path: string) => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
};

export const fetchApi = async (path: string) => {
  const requestUrl = getApiUrl(path);
  try {
    const response = await fetch(requestUrl);
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getMediaUrl = (media: { url: string }) => {
  if (media) {
    return media.url.startsWith("/") ? getApiUrl(media.url) : media.url;
  }
  throw new Error("No Image Source");
};
