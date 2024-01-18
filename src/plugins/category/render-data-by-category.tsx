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

// accept the template type: {template-1, template-2, ...}
export function renderDataBasedOnCategory(category: Category) {
  const { news } = category;

  const firstNews = news[0];
  const restNews = news.slice(1);

  const { title, subtitle, image, published_date } = firstNews;

  // add functionality for multiple template support. for example (firstNews, restNews, template_type)
  return `
        <div class="grid-col-1 grid gap-2 p-2 md:grid-cols-2 lg:grid-cols-2">
          <div class="mb-4">
            <img src="${image}" alt="${title}" class="object-cover" />
            <h2 class="mt-2 text-xl font-bold">${title}</h2>
            <p class="text-md">${subtitle}</p>
            <p class="mt-2 text-sm">${published_date}</p>
          </div>
          <div class="flex flex-wrap">
          ${restNews.map(
            ({ image, title }) => `
            <div class="w-full md:w-72 lg:w-72">
              <img src="${image}" alt="${title}" />
              <p>${title}</p>
            </div>`
          )}
          </div>
        </div>
  `;
}
