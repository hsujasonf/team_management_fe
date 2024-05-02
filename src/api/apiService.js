const BASE_URL = "http://localhost:8000/api";

async function fetchAPI(endpoint, method = "GET", data = null) {
  const url = `${BASE_URL}${endpoint}`;
  console.log(url, "<<<url");
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return method === "DELETE" ? response.ok : response.json(); // or return response.ok for DELETE if no content is expected
  } catch (e) {
    console.error("Fetch error: " + e.message);
    throw e;
  }
}

export const get = (endpoint) => fetchAPI(endpoint);
export const post = (endpoint, data) => fetchAPI(endpoint, "POST", data);
export const patch = (endpoint, data) => fetchAPI(endpoint, "PATCH", data);
export const del = (endpoint) => fetchAPI(endpoint, "DELETE");
