import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_API_URL).hostname,
      },
    ],
  },
};

export default withNextIntl(nextConfig);
