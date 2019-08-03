const { API_ROOT } = process.env;
const serialize = require("serialize-javascript");

async function foodie(route, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
      }

    const defaultOptions = { headers }
    await fetch(`${API_ROOT}/${route}`, {
        ...defaultOptions,
        ...options,
        redirect: 'manual',
      })
    
}

export default {
  get(route) {
    return foodie(route, {
      method: "GET"
    });
  },
  post(route, data) {
    return foodie(route, {
      method: "POST",
      body: serialize(data)
    });
  },
  put(route, data) {
    return foodie(route, {
      method: "PUT",
      body: serialize(data)
    });
  },
  delete(route) {
    return foodie(route, {
      method: "DELETE"
    });
  }
};
