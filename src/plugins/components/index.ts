import { Editor } from "grapesjs";

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

function convertTitleToId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

async function getCategories() {
  const res = await fetch("http://localhost:5173/api/v1/categories");

  if (!res.ok) {
    throw new Error("Error on fetching Categories.");
  }
  const categories: Omit<Category, "news">[] = await res.json();

  return categories.map(({ name }) => ({ id: name, name }));
}

async function getCategoryData(name: string) {
  const res = await fetch(
    `http://localhost:5173/api/v1/categories?name=${name}`
  );

  if (!res.ok) {
    throw new Error("Error on fetching category data");
  }

  const data = await res.json();

  return data[0];
}

// received category name, news
function renderDataBasedOnCategory(category: Category) {
  const { name, news } = category;

  const firstNews = news[0];
  const restNews = news.slice(1);

  const { title, subtitle, image, published_date } = firstNews;

  return `
    <section id=${convertTitleToId(name)}>
      <h2 class="ml-2 text-3xl font-bold">${name}</h2>
      <div class="grid-col-1 grid gap-2 p-2 md:grid-cols-2 lg:grid-cols-2">
        <div class="mb-4">
          <img src="${image}" alt="${title}" class="object-cover" />
          <h2 class="mt-2 text-xl font-bold">${title}</h2>
          <p class="text-md">${subtitle}</p>
          <p class="mt-2 text-sm">${published_date}</p>
        </div>
        <div class="grid-col-1 grid w-full gap-4 md:w-full md:grid-cols-2 lg:grid-cols-2 lg:w-1/2">
        ${restNews.map(
          ({ image, title }) => `
          <div class="w-full md:w-72 lg:w-72">
            <img src="${image}" alt="${title}" />
            <p>${title}</p>
          </div>
      `
        )}
    </div>
  </div>
</section>
`;
}

export async function ComponentPlugin(editor: Editor) {
  editor.Blocks.add("desher-khobor", {
    label: "দেশের খবর",
    content: `<div id="layout-1">Insert Data</div>`,
    media: "🤨",
    category: "খবর",
    attributes: {
      "data-gjs-editable": false,
      "data-gjs-removable": false,
    },
  });

  const categories = await getCategories();

  editor.DomComponents.addType("layout-1", {
    isComponent: (el) => el.id === "layout-1",

    model: {
      defaults: {
        attributes: {
          "data-gjs-editable": false,
          "data-gjs-removable": false,
        },

        traits: [
          {
            type: "select",
            label: "Category",
            name: "type",
            options: categories,
          },
        ],
      },

      init() {
        this.on("change:attributes:type", this.handleUpdateValue);
      },

      async handleUpdateValue() {
        const categoryType = this.getAttributes().type;
        const data = await getCategoryData(categoryType);

        this.components(renderDataBasedOnCategory(data));
      },
    },
  });
}
