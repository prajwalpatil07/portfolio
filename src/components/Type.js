import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter classname="font-white"
      options={{
        strings: [
          "Full stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;