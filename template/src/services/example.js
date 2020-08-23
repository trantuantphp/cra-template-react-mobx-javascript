import client from "./client";

const URI_PREFIX = "/example";

const URI_CALL_API = URI_PREFIX + "/call";

export function callAPI(request) {
  return client.post(URI_CALL_API, { ...request });
}
