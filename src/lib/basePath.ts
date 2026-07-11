// Base path for public assets (videos, images, favicon) referenced with plain
// <img>/<video>/<link> tags, which Next.js does NOT auto-prefix like /_next/ assets.
// Must match `basePath` in next.config.js.
export const BASE_PATH = '';

export const asset = (path: string): string => `${BASE_PATH}${path}`;
