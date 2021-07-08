import React, { Component } from "react";
import "./HomeScreen.css";
import NavBar from "./Nav";
import Banner from "./Banner";
import requests from "./Request";
import Row from "./Row";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <div className="homeScreen">
        <NavBar />
        <Banner />
        <Row title="TRENDING" fetchUrl={requests.fetchTrending} isLargeRow />
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          NetflixOriginals
        />
        <Row
          title="ACTION MOVIES"
          fetchUrl={requests.fetchActionMovies}
          isLargeRow
        />
        <Row
          title="COMEDY MOVIES"
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow
        />

        <Row
          title="HORROR MOVIES"
          fetchUrl={requests.fetchHorrorMovies}
          isLargeRow
        />
        <Row
          title="ROMANCE MOVIES"
          fetchUrl={requests.fetchRomanceMovies}
          isLargeRow
        />
        <Row
          title="DOCUMENTARY MOVIES"
          fetchUrl={requests.fetchDocumentMovies}
          isLargeRow
        />
      </div>
    );
  }
}

export default HomeScreen;
