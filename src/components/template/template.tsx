import { Main } from "./main";
import { Navbar } from "./navbar";
import "tailwindcss/tailwind.css";

export const Template = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Desktop Template</title>
        <meta name="description" content="A desktop viewport" />
      </head>

      <body className="bg-slate-900 mx-auto">
        <Navbar />
        <Main />
      </body>
    </html>
  );
};
