import { useState } from "react";
import {
  Etusivu,
  suosikit,
  map,
  lentaja,
  stick,
  news1,
  news2,
  news3,
  news4,
  news5,
  bgl2,
  blg5,
  bgl4,
  blg1,
} from "../assets"; // Käytä suhteellista polkua

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
        "Selaa elokuvia eri hakujen perusteella. Sovelluksessa myös pystyy tallentamaan omiin suosikkeihin ja arvioida elokuvia samalla tai lisätä katselulistalle. Myös teatterit oman sijainnil perusteella löytyvät helposti.",
      url: "https://github.com/ilarikoik/mobiiliprojekti",
      img: [Etusivu, suosikit, map],
      lang: "React Native, SQLite",
    },
    {
      title: "Lentäjät",
      description:
        "React sekä javalla toteutettu sovellus harraste lentäjille. Sivulla näkyy helposti kaikki lentäjille tarvittavat tiedot nopeasti. Oman lentokentän tiedot voi lisätä jos siellä on laite mikä paikantaa tuulen nopeuden ja muut tiedot.",
      url: "https://github.com/Ryhma-RED-Ohjelmistoprojekti-2/Weatherapp-backend",
      img: lentaja,
      lang: "React JavaScript, Java, SQL",
    },
    {
      title: "Uuutiset",
      description:
        "Responsiivinen uutis sivusto jossa pystyy hakea omalla hakusanalla tai valmiiksi annetuilla. ",
      url: "https://github.com/ilarikoik/newsTailwind",
      img: [news4, news5],
      lang: "React JavaScript, Tailwind",
    },
    {
      title: "Blog",
      description:
        "Blogi ammattikorkeakoulu opiskelijoille. Aloita keskuteluja tai vastaa olemassa oleviin keskuisteluihin. Kirjaudu sisään Google avulla.",
      url: "https://github.com/ilarikoik/blog",
      img: [blg5, blg1],
      lang: "React TypeScript, Tailwind, Firebase Database, Firebase autentikaatio",
    },
    {
      title: "SpotifyWrapper but Better",
      description: "Spotify wrapped mutta tarkempi ",
      url: "https://github.com",
      img: stick,
    },
    // {
    //   title: "Projekti 5 ",
    //   description:
    //     "Neljäs projekti, jossa toteutettiin jotain mielenkiintoista. Linkki tulee tänne.",
    //   url: "https://github.com",
    //   img: stick,
    // },
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
                className="flex h-fit w-full flex-row justify-around bg-slate-700 "
                key={index}
              >
                <div className="flex flex-col justify-center items-center w-3/5">
                  <h1 className=" text-2xl p-1 text-custom-beige">
                    <strong>{project.title}</strong>
                    <p className="text-lg text-custom-beige">{project.lang}</p>
                  </h1>
                  <h1 className="text-lg text-custom-beige p-5">
                    {project.description}
                  </h1>
                  <div className="flex flex-row justify-center items-center ">
                    <button
                      onClick={() => handleRedirect(project.url)}
                      className=" p-2 bg-slate-700 border-custom-beige border-2 text-custom-beige rounded-md text-md cursor-pointer hover:bg-custom-beige hover:border-slate-700 hover:border-2 hover:text-slate-700 mr-3"
                    >
                      Github
                    </button>
                  </div>
                </div>
                {Array.isArray(project.img) && project.img.length > 1 ? (
                  project.img.map((item, index) => {
                    return (
                      <div className="flex flex-col m-3 bg-red-500">
                        <img
                          src={item}
                          style={{
                            width: "fit-content",
                            height: 380,
                          }}
                        ></img>
                      </div>
                    );
                  })
                ) : (
                  <img
                    src={project.img}
                    style={{ width: 500, height: 350 }}
                  ></img>
                )}
              </div>
            ) : (
              <div
                className="flex h-full w-full flex-row bg-custom-beige p-2"
                key={index}
              >
                {Array.isArray(project.img) && project.img.length > 1 ? (
                  project.img.map((item, index) => {
                    return (
                      <div className="flex flex-col m-3 bg-red-500">
                        <img
                          src={item}
                          style={{
                            width: "fit-content",
                            height: 380,
                          }}
                        ></img>
                      </div>
                    );
                  })
                ) : (
                  <img
                    src={project.img}
                    style={{ width: 500, height: 350 }}
                  ></img>
                )}
                <div className="flex flex-col justify-center items-center w-3/5">
                  <h1 className=" text-2xl p-1 text-slate-700">
                    <strong>{project.title}</strong>
                    <p className="text-lg text-slate-700">{project.lang}</p>
                  </h1>
                  <h1 className="text-lg  text-slate-700 p-5">
                    {project.description}
                  </h1>
                  <p
                    onClick={() => handleRedirect(project.url)}
                    className="w-fit h-fit p-2 bg-custom-beige border-slate-700 border-2 text-slate-700 rounded-md mt-5 flex justify-end text-md cursor-pointer hover:bg-slate-700 hover:border-custom-beige hover:border-2 hover:text-custom-beige "
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
