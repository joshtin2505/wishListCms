export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-upload-supabase-provider",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      sizeLimit: 250 * 1024 * 1024, // 250MB
      actionOptions: {
        upload: {
          Bucket: env("SUPABASE_BUCKET"),
        },
        uploadStream: {
          Bucket: env("SUPABASE_BUCKET"),
        },
        delete: {
          Bucket: env("SUPABASE_BUCKET"),
        },
      },
      // breakpoints: null,
    },
  },
});
