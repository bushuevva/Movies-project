import React from "react";
import { MoviesList } from "/components/MoviesList";
import { Preloader } from "/components/Preloader";
import { Search } from "/components/Search";

//вытаскиваем переменную с ключом
// const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  //деструктуризация позволяет разбивать объект или массив на переменные при присвоении. Свойство prop объекта object здесь должно быть присвоено переменной varName. Если в объекте отсутствтует такое св-во, переменной varName присваивается значение по умолчанию

  state = {
    movies: [],
    loading: true, //при старте страницы
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=5d3d4ee8&s=marvel`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      //   получение данных из запроса
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  //   обновление фильмов при поиске
  searchMovies = (str, type = "all") => {
    // при начале загрузки
    this.setState({ loading: true });
    // принимает поисковую строку
    fetch(
      `https://www.omdbapi.com/?apikey=5d3d4ee8&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      //   передаем строку, которая была передана
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content">
        <Search searchMovies={this.searchMovies} />
        {/* проверка */}
        {loading ? <Preloader /> : <MoviesList movies={movies} />}
      </main>
    );
  }
}

export { Main };
