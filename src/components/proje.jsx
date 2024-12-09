import { useState } from "react";
import { Etusivu, suosikit, map, lentaja, stick } from "../assets"; // Käytä suhteellista polkua

// Voit käyttää kuvia näin:
<img src={Etusivu} alt="Etusivu" />;

export default function Proje({ aos }) {
  const [site, setSite] = useState("");

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const projectData = [
    {
      title: "Leffa",
      description:
        "Selaa elokuvia eri hakujen perusteella. Sovelluksessa myös pystyy tallentamaan omiin suosikkeihin ja arvioida elokuvia samalla tai lisätä katselulistalle. Myös teatterit oman sijainnil perusteella löytyvät helposti. Yksilötyö.",
      url: "https://github.com/ilarikoik/mobiiliprojekti",
      img: [Etusivu, suosikit, map],
    },
    {
      title: "Lentäjät",
      description:
        "React sekä javalla toteutettu sovellus harraste lentäjille. Sivulla näkyy helposti kaikki lentäjille tarvittavat tiedot nopeasti. Oman lentokentän tiedot voi lisätä jos siellä on laite mikä paikantaa tuulen nopeuden ja muut tiedot. Ryhmätyö.",
      url: "https://github.com/Ryhma-RED-Ohjelmistoprojekti-2/Weatherapp-backend",
      img: lentaja,
    },
    {
      title: "Projekti 3",
      description:
        "Kolmas projekti, joka toteutettiin jollain tavalla. Lisätään kuvaus ja linkki tähän.",
      url: "https://github.com",
      img: stick,
    },
    {
      title: "Projekti 4 ",
      description:
        "Neljäs projekti, jossa toteutettiin jotain mielenkiintoista. Linkki tulee tänne.",
      url: "https://github.com",
      img: stick,
    },
    {
      title: "Projekti 5 ",
      description:
        "Neljäs projekti, jossa toteutettiin jotain mielenkiintoista. Linkki tulee tänne.",
      url: "https://github.com",
      img: stick,
    },
  ];

  return (
    <>
      <div className="w-full h-16 flex justify-center items-center">
        <h1 className="text-3xl text-slate-700">
          <strong>Projektit</strong>
        </h1>
      </div>
      <div className=" bg-slate-700 w-full h-full flex flex-col justify-center items-center ">
        {projectData.length > 0 &&
          projectData.map((project, index) => {
            let side = index % 2 === 0;
            return side ? (
              <div
                className="flex h-full w-full flex-row justify-between bg-slate-700 "
                key={index}
              >
                <div className="flex flex-col justify-center items-center w-3/5">
                  <h1 className="font-bold text-4xl p-1 text-custom-beige">
                    {project.title}
                  </h1>
                  <h1 className="text-xl p-1 text-custom-beige">
                    {project.description}
                  </h1>
                  <div>
                    <p
                      onClick={() => handleRedirect(project.url)}
                      className="w-fit h-fit p-2 bg-slate-700 border-custom-beige border-2 text-custom-beige rounded-md mt-10 flex justify-end text-2xl cursor-pointer hover:bg-custom-beige hover:border-slate-700 hover:border-2 hover:text-slate-700 "
                    >
                      Github
                    </p>
                  </div>
                </div>
                {Array.isArray(project.img) && project.img.length > 1 ? (
                  project.img.map((item, index) => {
                    return (
                      <img
                        src={item}
                        style={{ width: 300, height: 450, margin: 3 }}
                      ></img>
                    );
                  })
                ) : (
                  <img
                    src={project.img}
                    style={{ width: 500, height: 400 }}
                  ></img>
                )}
              </div>
            ) : (
              <div
                className="flex h-full w-full flex-row bg-custom-beige"
                key={index}
              >
                <img
                  src={project.img}
                  style={{ width: 550, height: 400 }}
                ></img>
                <div className="flex flex-col justify-center items-center w-3/5">
                  <h1 className="font-bold text-4xl p-1 text-slate-700">
                    {project.title}
                  </h1>
                  <h1 className="text-xl p-1 text-slate-700">
                    {project.description}
                  </h1>
                  <p
                    onClick={() => handleRedirect(project.url)}
                    className="w-fit h-fit p-2 bg-custom-beige border-slate-700 border-2 text-slate-700 rounded-md mt-10 flex justify-end text-2xl cursor-pointer hover:bg-slate-700 hover:border-custom-beige hover:border-2 hover:text-custom-beige "
                  >
                    Github
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
