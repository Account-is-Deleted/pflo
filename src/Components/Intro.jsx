import React, { useEffect, useRef, useState } from "react";
import SvgIcon from "./SvgIcon";
const Intro = () => {
  const nameRef = useRef(null);
  const soundRef = useRef(new Audio("Sound2.wav"));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const nameElement = nameRef.current;
    nameElement.dataset.value = nameElement.innerText;

    const handleMouseOver = (event) => {
      let iteration = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) =>
            index < iteration
              ? event.target.dataset.value[index]
              : letters[Math.floor(Math.random() * 26)]
          )
          .join("");
        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }
        iteration += 1 / 4;
      }, 40);
      if (soundEnabled) {
        soundRef.current
          .play()
          .catch((error) => console.error("Audio play failed:", error));
      }
    };

    nameElement.addEventListener("mouseover", handleMouseOver);

    return () => {
      nameElement.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <main className="mainBg">
      <p id="mainTitle" className="reveal-type">
        Hiii<span className="redMain">!</span> I'm{" "}
        <span data-value="Rayan" id="name" ref={nameRef}>
          Rayan.
        </span>
        <br />
      </p>
      <p id="whoIam">
        This website <span className="redMain">is still</span> in progress...{" "}
        <span className="redMain">🔨 </span>
      </p>
      <button onClick={toggleSound} id="soundButton">
        <SvgIcon id="soundIcon" svg={soundEnabled ? "soundOn" : "soundOff"} />
      </button>
      <div className="bgShape1"></div>
      <div className="bgShape2"></div>
    </main>
  );
};

export default Intro;
