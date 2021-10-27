import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
      {/* <h1 className="h1">NetFlix</h1> */}
      <Nav/>
      <Banner/>
      <Row title="NetFlix Originals" fetchURL = {requests.fetchNetflixOriginals} isLargeRow></Row> 
       {/* This fetchURL is having the latter part of the api endpoint. */}
      <Row title="Trending Now" fetchURL = {requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchURL = {requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchURL = {requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchURL = {requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchURL = {requests.fetchHorrorMovies}></Row>
      <Row title="Romantic Movies" fetchURL = {requests.fetchRomanceMovies}></Row>
      {/* <Row title="Documentaries" fetchURL = {requests.fetchDocumentaries}></Row> */}
    </div>
  );
}

export default App;
