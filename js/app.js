function AddMoviesForm(props) {
  const [name, setname] = React.useState("");

  function handleChange(e) {
    setname(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <input type="submit" value="Add item" />
    </form>
  );
}

function MovieListsFun(props) {
  function handleDelete(id) {
    props.onDelete(id);
  }
  return (
    <div>
      <ul>
        {props.movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.moviesName}{" "}
              <button onClick={() => handleDelete(movie.id)}>Delete</button>{" "}
              {movie.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function App() {
  const MovieList = [
    {
      id: 1,
      moviesName: "the iron man ",
    },
    {
      id: 2,
      moviesName: "the invensible ",
    },
    {
      id: 3,
      moviesName: "Unnala Unnala",
    },
  ];

  const [mov, changeState] = React.useState(MovieList);

  // const [inputname, changeInputName] = React.useState("");

  // function handleChange(e) {
  //   changeInputName(e.target.value);
  //   // console.log(e.target.value);
  // }

  function handleDelete(id) {
    console.log("Delete", id);
    changeState((prev) => {
      const items = prev.filter((i) => i.id != id);
      return items;
    });

    // const items = MovieList.filter((i) => i.id != id);
    // changeState(items);
    // return [];
  }

  function handleMovieAdd(name) {
    const movies = {
      id: new Date().getTime(),
      moviesName: name,
    };
    const newmovies = [...MovieList];
    newmovies.push(movies);
    changeState(newmovies);
  }

  return (
    <div>
      <AddMoviesForm onAdd={handleMovieAdd} />
      <MovieListsFun movies={mov} onDelete={handleDelete} />
    </div>
  );
}
// const app = document.querySelector("#app");
// const MyP = () => React.createElement("p", null, "hello");
// const MyDiv = () => React.createElement("div", null, <MyP />);

// ReactDOM.render(<MyDiv />, app);
// ReactDOM.render(<App />, document.querySelector("#app"));

// function MyDiv() {
//   return <div>My Div</div>;
// }

// const MyDiv = () => <div>My Div</div>;
// ReactDOM.render(<MyDiv />, document.querySelector("#app"));

// const MyDiv = <div>My Div</div>;
//const MyDiv = React.createElement("div", null, "My Div");

ReactDOM.render(<App />, document.querySelector("#app"));
