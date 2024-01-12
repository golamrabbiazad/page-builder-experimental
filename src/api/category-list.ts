import { API_URL } from "./url";

interface News {
  title: string;
  subtitle: string;
  image: string;
  published_date: string;
}

interface Category {
  id: string;
  name: string;
  news: News[];
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`);

  if (!res.ok) {
    throw new Error("Error on fetching Categories.");
  }
  const categories: Omit<Category, "news">[] = await res.json();

  return categories.map(({ name }) => ({ id: name, name }));
}
