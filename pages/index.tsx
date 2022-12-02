import styles from "../styles/Home.module.css";
import Head from "next/head";
import { FormEvent, useState } from "react";

import Histogram, { HistogramProps } from "../src/components/histogram";
import { getCommonWordMap } from "../src/utils";

export default function Home() {
  const [histoData, setHistoData] = useState<HistogramProps | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await res.text();

    const wordMaps = getCommonWordMap(text, 20);

    setHistoData({
      title: "Most common words",
      labels: Array.from(wordMaps.keys()),
      datasets: [
        {
          label: "Occurences",
          data: Array.from(wordMaps.values()),
          backgroundColor: "rgb(55, 178, 255)",
          barPercentage: 1.2,
        },
      ],
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TTT</title>
        <meta name="description" content="TTT Internship Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {histoData ? (
          <Histogram
            title={histoData.title}
            labels={histoData.labels}
            datasets={histoData.datasets}
          />
        ) : (
          <form method="GET" onSubmit={onSubmit}>
            <input type="submit" value="Submit" />
          </form>
        )}
      </main>
    </div>
  );
}
