import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../components/MainTemplate";
import styles from "../../styles/Home.module.css";
import MovieList from "./movies/list";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Funny Movies</title>
        <meta name="description" content="Have fun with your friend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainTemplate>
        <MovieList />
      </MainTemplate>
    </div>
  );
};

export default Home;
