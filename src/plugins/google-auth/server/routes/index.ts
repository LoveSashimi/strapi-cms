export default [
  {
    method: 'GET',
    path: '/content-type',
    handler: 'google-auth.findContentTypes',
    config: {
      auth: false,
      policies: [],
    },
  },
];
