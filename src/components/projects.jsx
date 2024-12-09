import { useState } from "react";

export default function Projects({ aos }) {
  const [site, setSite] = useState("");

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const projectData = [
    {
      title: "MOBIILI",
      description:
        "Selaa elokuvia eri hakujen perusteella. Sovelluksessa myös pystyy tallentamaan omiin suosikkeihin ja arvioida elokuvia samalla tai lisätä katselulistalle. Myös teatterit oman sijainnil perusteella löytyvät helposti. Yksilötyö.",
      url: "https://github.com/ilarikoik/mobiiliprojekti",
    },
    {
      title: "Lentäjät",
      description:
        "React sekä javalla toteutettu sovellus harraste lentäjille. Sivulla näkyy helposti kaikki lentäjille tarvittavat tiedot nopeasti. Oman lentokentän tiedot voi lisätä jos siellä on laite mikä paikantaa tuulen nopeuden ja muut tiedot. Ryhmätyö.",
      url: "https://github.com/Ryhma-RED-Ohjelmistoprojekti-2/Weatherapp-backend",
    },
    {
      title: "Projekti 3",
      description:
        "Kolmas projekti, joka toteutettiin jollain tavalla. Lisätään kuvaus ja linkki tähän.",
      url: "https://github.com",
    },
    {
      title: "Projekti 4",
      description:
        "Neljäs projekti, jossa toteutettiin jotain mielenkiintoista. Linkki tulee tänne.",
      url: "https://github.com",
    },
  ];

  return (
    <>
      {/* Grid layout, jossa responsiivisuus hallitaan Tailwindin avulla */}
      <div
        data-aos={aos}
        className="flex flex-col justify-center items-center bg-slate-700 p-7"
      >
        <h3 className="font-bold text-4xl p-1 text-custom-beige">Projektit</h3>
        <div className="flex justify-center items-center md:w-12/12 lg:w-10/12">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:w-4/6 gap-6 p-5 justify-items-center">
            {projectData.map((project, index) => (
              <div
                className="bg-custom-beige cursor-pointer rounded-md h-64 w-full p-3 flex flex-col justify-around items-center  md:w-4/5 lg:w-full"
                onClick={() => handleRedirect(project.url)}
                key={index}
              >
                <h1 className="text-olive font-bold">{project.title}</h1>
                <p className="text-olive font-semibold ">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
