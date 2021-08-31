import React, { useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./styles.css";
import a from "./1.png";
import b from "./2.png";
import c from "./3.png";
import geo from "./geo.json";

function App() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibmVsbGl0IiwiYSI6ImNrb3dncHdnOTA1emQybnBkZ3N1MjhzYW8ifQ.uqKPevtCLOPOjX88-7ZK9w";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/navigation-day-v1",
      center: [-9.135491, 38.7071],
      zoom: 13
    });

    geo.forEach(function (marker) {
      const divs = document.querySelectorAll(".placeholder");
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundColor = "#fff";
      el.style.width = "50px";
      el.style.height = "36px";
      el.innerHTML = marker.price;

      divs.forEach(function (div) {
        el.addEventListener("mouseover", (e) => {
          if (div.id === marker.id) {
            el.style.backgroundColor = "#333333";
            div.style.backgroundColor = "#333333";
            el.style.color = "#FFF";
          }
        });
        el.addEventListener("mouseout", () => {
          el.style.backgroundColor = "#fff";
          div.style.backgroundColor = "#fff";
          el.style.color = "#333333";
        });
        div.addEventListener("mouseover", (e) => {
          if (div.id === marker.id) {
            el.style.backgroundColor = "#333333";
            div.style.backgroundColor = "#333333";
            el.style.color = "#fff";
          }
        });
        div.addEventListener("mouseout", () => {
          el.style.backgroundColor = "#fff";
          div.style.backgroundColor = "#fff";
          el.style.color = "#333333";
        });
      });
      new mapboxgl.Marker(el).setLngLat(marker.coordinates).addTo(map);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="map-overlay">
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={b} alt="" />
            </div>
            <div className="info">
              <h2>Cosy Duplex House in Downtown Lisboa</h2>
              <ul>
                <li>4 guests</li>
                <li>2 rooms</li>
                <li>4 beds</li>
                <li>WI-FI</li>
                <li>Kitchen</li>
              </ul>
              <span>$90 / night</span>
            </div>
          </div>
          <div className="placeholder" id="1"></div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={a} alt="" />
            </div>
            <div className="info">
              <h2>Charming Blue Basil House @ Lisbon Center</h2>
              <ul>
                <li>6 guests</li>
                <li>3 rooms</li>
                <li>4 beds</li>
                <li>WI-FI</li>
                <li>Kitchen</li>
              </ul>
              <span>$112 / night</span>
            </div>
          </div>
          <div className="placeholder" id="2"></div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={c} alt="" />
            </div>
            <div className="info">
              <h2>Sunny townhouse with a large terrace</h2>
              <ul>
                <li>3 guests</li>
                <li>1 rooms</li>
                <li>2 beds</li>
                <li>WI-FI</li>
                <li>Kitchen</li>
              </ul>
              <span>$75 / night</span>
            </div>
          </div>
          <div className="placeholder" id="3"></div>
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
}

render(<App />, document.querySelector("#root"));
