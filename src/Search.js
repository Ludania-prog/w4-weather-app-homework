import React from "react";

export default function Search() {
  return (
    <div>
      <div className="header">
        <ul>
          <li>
            <a>Lisbon</a>
          </li>
          <li>
            <a>Paris</a>
          </li>
          <li>
            <a>Sidney</a>
          </li>
          <li>
            <a>San Francisco</a>
          </li>
        </ul>
      </div>

      <form className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          id="search-form-input"
          className="search-form-input"
        />

        <input type="submit" value="Search" className="search-form-button" />
      </form>
    </div>
  );
}
