import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";
import { getDictionary } from "@/dictionaries/getDictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "MDS - Modou Digital Services | Consulting IT & Support",
  description: "Votre partenaire stratégique en services IT, support informatique, helpdesk, infogérance, et placement IT. Respect des SLA garanti.",
};

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-20">
        <Navbar dict={dict} lang={lang} />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
