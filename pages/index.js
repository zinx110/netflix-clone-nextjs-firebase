import Head from "next/head";
import Image from "next/image";
import Row from "../components/Row";
import requests from "../requests";
import styles from "../styles/Home.module.css";
import axios from "../axios";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function Home(props) {
  return (
    <div>
      <Navbar />
      <Banner bannerMovie={props.bannerMovie} />
      <Row
        title="NETFLIX ORIGINALS"
        movies={props.netflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" movies={props.trendingNow} />
      <Row title="Top Rated" movies={props.topRated} />
      <Row title="Action Movies" movies={props.actionMovies} />
      <Row title="Comedy Movies" movies={props.comedyMovies} />
      <Row title="Horror Movies" movies={props.horrorMovies} />
      <Row title="Romance Movies" movies={props.romanceMovies} />
      <Row title="Documentaries" movies={props.documentaries} />
    </div>
  );
}

export async function getServerSideProps() {
  // movie components
  const requestNetflixOriginals = await axios.get(
    requests.fetchNetflixOriginals
  );
  const requestTrendingNow = await axios.get(requests.fetchTrending);
  const requestTopRated = await axios.get(requests.fetchTopRated);
  const requestActionMovies = await axios.get(requests.fetchActionMovies);
  const requestComedyMovies = await axios.get(requests.fetchComedyMovies);
  const requestHorrorMovies = await axios.get(requests.fetchHorrorMovies);
  const requestRomanceMovies = await axios.get(requests.fetchRomanceMovies);
  const requestDocumentaries = await axios.get(requests.fetchDocumentaries);

  return {
    props: {
      //banner
      bannerMovie:
        requestNetflixOriginals.data.results[
          Math.floor(
            Math.random() * requestNetflixOriginals.data.results.length - 1
          )
        ],

      //genres
      netflixOriginals: requestNetflixOriginals.data.results,
      trendingNow: requestTrendingNow.data.results,
      topRated: requestTopRated.data.results,
      actionMovies: requestActionMovies.data.results,
      comedyMovies: requestComedyMovies.data.results,
      horrorMovies: requestHorrorMovies.data.results,
      romanceMovies: requestRomanceMovies.data.results,
      documentaries: requestDocumentaries.data.results,
    },
  };
}
