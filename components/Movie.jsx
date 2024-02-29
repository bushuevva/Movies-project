import React from "react";

//для получения пропсов
//карточка фильмов
function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card movie">
      {/* добавим получение id */}
      <div className="card-image waves-effect waves-block waves-light">
        {/* некоторые постеры могут приходить пустыми, поэтому добавим проверку */}
        {poster === "N/A" ? (
          <img src={`https://placehold.co/300x450?text=${title}`} alt="" />
        ) : (
          <img className="activator" src={poster} alt="" />
        )}
        {/* картинку будем получать динамически */}
      </div>

      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{title}</span>
        {/* заголовок получаем динамически */}
        <p>{year}</p>
        {/* динамическое получение года */}
        <span className="right">{type}</span>
        {/* динамическое получение типа элемента- фильм/сериал и т.д, он будет отображаться справа */}
      </div>
    </div>
  );
}
export { Movie };
