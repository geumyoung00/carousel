import { useState } from "react";
import "./styles.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function App() {
  const [imgIdx, setImgIdx] = useState(0);
  const last = images.length - 1;
  const arwHandler = (direction) => {
    if (direction === "left") {
      if (imgIdx === 0) {
        setImgIdx(last);
      } else {
        setImgIdx(imgIdx - 1);
      }
    }
    if (direction === "right") {
      if (imgIdx === last) {
        setImgIdx(0);
      } else {
        setImgIdx(imgIdx + 1);
      }
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Project 1: Carousel</h2>
        <div className="slider">
          <div className="left-arrow" onClick={() => arwHandler("left")}>
            ⬅
          </div>
          <div className="right-arrow" onClick={() => arwHandler("right")}>
            ⮕
          </div>
        </div>
        <div className="slide">
          <img src={images[imgIdx]} />
        </div>
      </div>
    </div>
  );
}

export default App;
