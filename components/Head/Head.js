import Head from "next/head";

export const TheHead = ({ metas }) => {
  return (
    <Head>
      <title>Cursuri IT cu certificare internationala</title>
      {metas.map((meta, i) => (
        <meta name={meta.name} content={meta.content} />
      ))}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
