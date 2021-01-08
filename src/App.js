import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Nav />

      <Banner />

      <Row
        title="Netflix Originals"
        fetchurl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <div className="app__rows">
        <Row title="Top Rated" fetchurl={request.fetchTopRated} />
        <Row title="Trending" fetchurl={request.fetchTrending} />
        <Row title="Action Movies" fetchurl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchurl={request.fetchHorrorMoives} />
        <Row title="Documentaries" fetchurl={request.fetchDocumentaries} />
        <Row title="Romance Movies" fetchurl={request.fetchRomanceMovies} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
