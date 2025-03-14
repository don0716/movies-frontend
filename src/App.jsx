import MovieByTitle from "./components/MovieByTitle";
import Movies from "./components/Movies"
function App() {
  return (
    <div>
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </div>
  );
}

export default App;
