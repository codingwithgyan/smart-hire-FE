const config = {
  local: {
    api: {
      baseUrl: "http://localhost:2345/api",
    },
  },
  prod: {
    api: {
      baseUrl: "https://smart-hire-be.replit.app/api",
      // baseUrl:
      //   "https://e33435fc-9d3f-4943-bbf7-37825b8459c3-00-1gjf8b7ixxr39.spock.replit.dev/api",
    },
  },
};

const env = process.env.REACT_APP_STAGE || "local";

export default config[env];
