export default function About() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <section className=" h-fit flex flex-col justify-center items-center p-5 sm:flex-row lg:max-w-screen-lg ">
          <div
            className="border-10 h-60 w-48 bg-yellow-200 rounded-lg mb-5 sm:w-48 m-3"
            style={{
              backgroundImage:
                'url("https://media.tenor.com/hdyqecpPgL8AAAAM/stare-awkward.gif")',
              backgroundRepeat: "no-repeat", // Estää kuvan toistumisen
              backgroundPosition: "center",
            }}
          />
          <p className="text-olive font-semibold sm:p-5 lg:p-12 w-fit">
            Olen [Nimesi], kolmannen vuoden tietojenkäsittelyn opiskelija
            Haaga-Heliassa, erikoistuen ohjelmistokehitykseen.
            <br />
            <br />
            React/React Native, Java, SQL
          </p>
        </section>
      </div>
      <div className="w-full flex justify-center items-center">
        <section className="flex w-full flex-col mb-10  justify-center items-center bg-slate-700 md:w-3/5">
          <h3 className="text-custom-beige  font-bold text-xl mt-3 ">
            Mitä ja miksi etsin?
          </h3>
          <p className="text-custom-beige text-md p-5 font-semibold md:p-12">
            Etsin mahdollisuuksia päästä syventämään taitojani käytännössä ja
            kehittymään ohjelmistokehittäjänä. Erityisesti etsin
            harjoittelupaikkaa tai työpaikkaa, jossa voisin työskennellä
            käytännön projekteissa ja oppia kokeneemmilta ammattilaisilta.
            Lisäksi olen kiinnostunut opparin tekemisestä, jossa voin yhdistää
            opintojeni aikana oppimani ja tuoda uusia ideoita ja
            ratkaisukeskeistä ajattelua tiimiin.
          </p>
        </section>
      </div>
    </>
  );
}
