import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedDate,
      source,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://st1.bollywoodlife.com/wp-content/uploads/2021/12/Katrina-Kaif-Vicky-Kaushal-Ranbir-Kapoor-Salman-Khan-600x315.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By : {!author ? "Unknown" : author} on{" "}
                {new Date(publishedDate).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
