import Footer from "@/modules/frontend/@layout/footer";
import Header from "@/modules/frontend/@layout/header";
import { kironFont, shurjoFont } from "../fonts/bangla-fonts";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col min-h-screen ${shurjoFont.variable} ${kironFont.variable}`}
    >
      <Header />
      <main>{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
