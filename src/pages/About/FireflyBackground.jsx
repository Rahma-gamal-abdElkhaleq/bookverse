
import React, { useEffect } from "react";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import { tsParticles } from "tsparticles-engine";
import Particles from "react-tsparticles";

const FireflyBackground = () => {

  useEffect(() => {

    loadFireflyPreset(tsParticles);

  }, []);

  return (

    <Particles

      id="tsparticles"

      style={{

        position: "absolute",

        inset: 0,

        zIndex: 0,

        pointerEvents: "none",

      }}

      options={{

        fullScreen: {

          enable: false,

        },

        preset: "firefly",

        particles: {

          number: {

            value: 35,

          },

          color: {

            value: "#ffffff",

          },

          opacity: {

            value: 0.25,

          },

          size: {

            value: {

              min: 1,

              max: 3,

            },

          },

          move: {

            speed: 0.4,

          },

        },

        detectRetina: true,

      }}

    />

  );

};

export default FireflyBackground;

