const API = "http://localhost:3000/api";

const handleResp = async (res) => {
  if (!res.ok) throw new Error((await res.json()).error || res.statusText);
  return res.json();
};

export const foodService = {
  getItems: async () => {
    const res = await fetch(`${API}/items`);
    return handleResp(res);
  },

  getAvailableItems: async () => {
    const all = await (await fetch(`${API}/items`)).json();
    return all.filter((i) => i.inStock !== false);
  },

  getUnavailableItems: async () => {
    const all = await (await fetch(`${API}/items`)).json();
    return all.filter((i) => i.inStock === false);
  },

  addItem: async (item) => {
    const res = await fetch(`${API}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return handleResp(res);
  },

  updateItem: async (id, updates) => {
    const res = await fetch(`${API}/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    return handleResp(res);
  },

  deleteItem: async (id) => {
    const res = await fetch(`${API}/items/${id}`, {
      method: "DELETE",
    });
    return handleResp(res);
  },
};
