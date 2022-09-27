
import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix - Clone</h1>
      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
