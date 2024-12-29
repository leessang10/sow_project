import {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i.ytimg.com'
            },
            {
                hostname: 'zkmpkeilkhigsc2f.public.blob.vercel-storage.com'
            }
        ]
    }
}

module.exports = nextConfig 