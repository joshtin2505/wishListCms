export default ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  // "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "img-src": ["'self'", "data:", "blob:", env("SUPABASE_API_URL")],
        },
      },
    },
  },
];
