import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },
    typescript: {
        ignoreBuildErrors: true,  // ← временно, пока Turbopack не пофиксят
    },
};

export default nextConfig;
