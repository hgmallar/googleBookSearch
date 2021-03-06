import React from "react";
import "./style.css";

function List(props) {

  const isApi = props.isApi;

  return (
    <ul>
      {props.results.map(result => (
        <li key={(isApi) ? result.id : result._id}>
          <div className="book">
            <img alt="Book" src={(isApi && result.volumeInfo.imageLinks) ? result.volumeInfo.imageLinks.smallThumbnail : ((isApi) ? "https://via.placeholder.com/200" : result.image)} className="image" />
            <div className="info">
              <h4 className="title">{(isApi) ? result.volumeInfo.title : result.title}</h4>
              <h5 className="author"> {(isApi && !result.volumeInfo.authors) ? "" : "Written by"} {(isApi && result.volumeInfo.authors) ? result.volumeInfo.authors.map(t => <span key={t}>{t}</span>).reduce((prev, curr) => [prev, ', ', curr]) : ((isApi) ? "" : result.authors.map(t => <span key={t}>{t}</span>).reduce((prev, curr) => [prev, ', ', curr]))}</h5>
              <p>{(isApi) ? result.volumeInfo.description : result.description}</p>
            </div>
            <div className="buttons">
              <a href={(isApi) ? result.volumeInfo.previewLink : result.link} target="_blank" rel="noreferrer noopener"><button className="button grey">View</button></a>
              <button className={(isApi) ? "button blue" : "button red"} onClick={
                (isApi) ? () => props.action(result.volumeInfo.title, result.volumeInfo.authors, result.volumeInfo.previewLink, result.volumeInfo.imageLinks.smallThumbnail, result.volumeInfo.description) :
                  () => props.action(result._id)}>{props.text}</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
