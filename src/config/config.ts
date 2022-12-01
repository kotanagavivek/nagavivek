require("dotenv").config();

export let config = {
  //Common Settings
  serviceName: process.env.SERVICE_NAME || "http-service",
  port: process.env.PORT || 9600,
  useDb: process.env.USE_DB === "true" ? true : false,
  useGET: process.env.useGET === "true" ? true : false,
  isDevMode: process.env.NODE_ENV === "development" ? true : false,
  dbTTL: process.env.DB_TTL || 90,

  authAPIkey: process.env.AUTH_API_KEY || "0",
  maxFileSize: 50,
  imageTTL: process.env.IMAGE_TTL || 365, //in days
  // downloadURL:
  // process.env.URL + "/static/media/uploads/" ||
  // "http://10.75.17.137:9500/static/media/uploads/",
  // uploadURL: "http://10.75.17.137:9500",
  ubuntuUrl: "http://10.75.17.204",

  maxAllowedResPayloadLength:
    process.env.MAX_ALLOWED_RES_PAYLOAD_LENGTH || "30000", // total number of entries in response
};

export function setOneConfig(name, value) {
  config[name] = value;
}

// export const jwtSecretAccess = "J434dgeBPTsd5GsdGORD91C4G5GJ43efgom12nshhd9opP";
// export const jwtSecretRefresh = "J434dgeBPTsd5GsdGORD91CJ434dgeBPTsd5GsdGORD91C";
// export const iss = "VR-CMS";
