import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header/Header";
import Explorer from "@/components/Explorer/Explorer";
import Panel from "@/components/Panel/Panel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const docString = localStorage.getItem("doc");

    if (docString) {
      const doc = JSON.parse(docString);
      setTitle(doc.title);
      setDate(doc.date);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Google Does</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{title ? <Explorer title={title} date={date} /> : <Panel />}</main>
    </>
  );
}
