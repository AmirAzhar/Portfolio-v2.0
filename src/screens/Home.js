import "./home.css";
import { Scrollbar } from "react-scrollbars-custom";

import lax from "lax.js";
import { useEffect } from "react";

const Home = () => {
  const componentDidMount = () => {
    document.body.classList.add("homeBg");
  };

  const componentWillUnmount = () => {
    document.body.classList.remove("homeBg");
  };

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
          [300, 600, 900],
          [0, 1, 0],
        ],
      },
    });
  }, []);
  return (
    <div>
      <Scrollbar
        noScrollX={"True"}
        style={{
          width: "100%",
          height: "100%",
          position: "inherit",
        }}
      >
        <div className="fadeIn">
          <div className="fadeOut">{componentDidMount()}Hello</div>
          <div className="fadeIn">I'm Amir</div>
        </div>
      </Scrollbar>
    </div>
  );
};

export default Home;
