import Lottie from "lottie-react";
import Coding2 from "../lottie/Coding2.json";

export default function Courses({ aos }) {
  return (
    <div data-aos={aos} className="bg-slate-700">
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl p-3 text-custom-beige">
          Olennaiset kurssit suoritettu
        </h1>
      </div>
      <div className="bg-slate-700  h-fit flex flex-row justify-center items-center mt-2">
        <div className="flex flex-col">
          <p className="font-bold text-xl p-3 text-custom-beige">
            Ohjelmointi 1
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Ohjelmointi 2
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Tietokannat 1
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Tietokannat 2
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">Frontend</p>
          <p className="font-bold text-xl p-3 text-custom-beige">Backend</p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Ohjelmistoprojekti
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Ohjelmistoprojekti 2
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">Softala</p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Vaatimusmäärittely
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Ohjelmistotestaus
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige">
            Verkkoon tunkeutuminen ja testaus
          </p>
          <p className="font-bold text-xl p-3 text-custom-beige"></p>
        </div>
        <div className="hidden sm:block">
          <Lottie
            style={{ height: 300, width: 300 }}
            animationData={Coding2}
          ></Lottie>
        </div>
      </div>
    </div>
  );
}
