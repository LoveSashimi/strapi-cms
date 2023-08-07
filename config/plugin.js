module.exports = ({ env }) => ({
  // ...

  "vercel-deploy": {
    enabled: true,
    /*config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      //teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],

    }*/





  },
  email: {
    provider: 'mailtrap',
    providerOptions: {
      user: env('MAILTRAP_USER', '67da28309c73ec'),
      password: env('MAILTRAP_PASSWORD', 'f29ad58fe9e1f6')
    },
    settings: {
      defaultFrom: env('MAILTRAP_DEFAULT_FROM', 'tonyzliu05@gmail.com'),
      defaultReplyTo: env('MAILTRAP_DEFAULT_REPLY_TO', 'tonyzliu05@gmail.com'),
    },
  }
  // ...
});