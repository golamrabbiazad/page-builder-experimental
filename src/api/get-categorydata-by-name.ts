import { API_URL } from "./url";

export async function getCategoryByName(name: string) {
  const res = await fetch(`${API_URL}/categories?name=${name}`);

  if (!res.ok) {
    throw new Error("Error on fetching category data");
  }

  const data = await res.json();

  return data[0];
}
