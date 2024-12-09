export default function Courses({ aos }) {
  return (
    <div
      data-aos={aos}
      className="bg-slate-700  h-fit flex flex-col justify-evenly items-center mt-2"
    >
      <h1 className="font-bold text-4xl p-3 text-custom-beige">
        Olennaiset kurssit suoritettu
      </h1>
      <p className="font-bold text-xl p-3 text-custom-beige">Ohjelmointi 1</p>
      <p className="font-bold text-xl p-3 text-custom-beige">Ohjelmointi 2</p>
      <p className="font-bold text-xl p-3 text-custom-beige">Tietokannat 1</p>
      <p className="font-bold text-xl p-3 text-custom-beige">Tietokannat 2</p>
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
  );
}
