import Lottie from "lottie-react";
import HistoryAnimation from "../lottie/HistoryAnimation.json";
import React, { useRef, useEffect } from "react";
import { initScrollReveal } from "../jscss/scrollReveal";

export default function Historia({ aos }) {
  const animationRef = useRef(null);

  return (
    <div
      data-aos={aos}
      className="bg-custom-beige text-olive h-96  flex flex-col justify-evenly items-center mt-2"
    >
      <h1 className="font-bold text-4xl p-3 text-olive">Työhistoria</h1>
      <div className="flex flex-row justify-evenly w-4/5">
        <div id="lottie-con" className="flex justify-center">
          <Lottie
            lottieRef={animationRef}
            animationData={HistoryAnimation}
            loop={false}
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-bold text-xl p-3 text-olive">
            Varasto n. 2kk kesälomalla
          </p>
          <p className="font-bold text-xl p-3 text-olive">
            Sauntalo n. 2 vuotta
          </p>
          <p className="font-bold text-xl p-3 text-olive">
            Mijorak n. 2 vuotta
          </p>
          <p className="font-bold text-xl p-3 text-olive">
            Eri vuokrafirmojen kautta rakennushommissa
          </p>
        </div>
      </div>
    </div>
  );
}
