import "./home.css";

import lax from "lax.js";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Setup lax
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    // Add your elements
    lax.addElements(".fadeOut", {
      scrollY: {
        opacity: [
          [0, 300],
          [1, 0],
        ],
      },
    });
    lax.addElements(".fadeIn", {
      scrollY: {
        opacity: [
          [300, 600],
          [0, 1],
        ],
      },
    });
  }, []);
  return (
    <div>
      <h1 className="fadeOut">Hello</h1>
      <h1 className="fadeIn">I'm Amir</h1>
    </div>
  );
};

export default Home;
