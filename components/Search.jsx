import React from "react";
class Search extends React.Component {
  state = {
    search: "",
    type: "all", //по умолчанию будем искать все типы
  };

  //отправка функции с названием искомого фильма
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  //обновление поиска
  handleFilter = (event) => {
    //когда происходит изменение, то обращаемся к функции изменения состояния
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type); //вызываем функцию каждый раз, когда происходят изменения
      }
    );
  };

  render() {
    return (
      <div>
        <div className="row search">
          <input
            id="search_inline"
            type="search"
            placeholder="search"
            className="validate"
            value={this.state.search} //управляемый компонент, будем передавать значение из value в search, который хранится внутри state
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          {/* добавление кнопки */}
          <a
            href="#!"
            className="waves-effect btn blue lighten-1"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </a>
        </div>

        <div className="radio_Movies">
          <label>
            <input
              className="with-gap"
              name="group"
              type="radio"
              checked={this.state.type === "all"}
              data-type="all"
              onChange={this.handleFilter}
            />
            {/* data-type хранит значение для поиска */}
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="group"
              type="radio"
              checked={this.state.type === "movie"}
              data-type="movie"
              onChange={this.handleFilter}
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="group"
              type="radio"
              checked={this.state.type === "series"}
              data-type="series"
              onChange={this.handleFilter}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
export { Search };
