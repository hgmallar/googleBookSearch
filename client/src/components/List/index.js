import React from "react";
import "./style.css";

function List(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <div className="book">
            <img alt="Book" src={result.volumeInfo.imageLinks.smallThumbnail} className="image" />
            <div className="ml-2 info">
              <h4 className="title">{result.volumeInfo.title}</h4>
              <h5 className="author"> Written by {result.volumeInfo.authors.map(t => <span key={t}>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}</h5>
              <p>{result.volumeInfo.description}</p>
            </div>
            <div className="buttons ml-2">
              <a href={result.volumeInfo.previewLink} target="_blank" rel="noreferrer noopener"><button className="btn btn-secondary mb-2">View</button></a>
              <button className="btn btn-danger mb-2">Save</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
