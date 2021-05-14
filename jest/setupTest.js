process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [],
    domains: ["restcountries.eu"],
    path: "/_next/image",
    loader: "default",
  },
};

// source: https://github.com/vercel/next.js/discussions/18373#discussioncomment-114212