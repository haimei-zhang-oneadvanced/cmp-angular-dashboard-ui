const PROXY_CONFIG = [
  {
    context: [
      "**/api/*",
      "**/api/**",
      "**/swl/**",
    ],
    target: "https://ew1-dev-attribute-manager-ui.sci-ware-customer.com",
    secure: false,
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
