export async function getCategorys() {
  const res = await fetch(`http://localhost:8000/read-categories`);
  return res.json();
}

export const getSubCategories = async (id: number) => {
  const response = await fetch(
    `http://localhost:8000/read-sub-categories/${id}`
  );
  const data = await response.json();

  return data;
};

export const getDuas = async (id: number) => {
  const response = await fetch(`http://localhost:8000/read-duas/${id}`);
  const data = await response.json();

  return data;
};
