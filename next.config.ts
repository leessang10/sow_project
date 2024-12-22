import {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i.ytimg.com'
            }
        ]
    }
}

module.exports = nextConfig 