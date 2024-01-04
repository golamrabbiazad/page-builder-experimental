import { Main } from "./main";
import { Navbar } from "./navbar";
import "tailwindcss/tailwind.css";

export const Template = () => {
  return (
    <html lang="en">
      <body className="bg-slate-900 mx-auto">
        <Navbar />
        <Main />
      </body>
    </html>
  );
};
