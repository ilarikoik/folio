import { useState } from "react";
import { Etusivu, suosikit, map, lentaja, stick } from "../assets"; // Käytä suhteellista polkua

// Voit käyttää kuvia näin:
<img src={Etusivu} alt="Etusivu" />;

export default function Projects({ aos }) {
  const [site, setSite] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Hallitsee modaalin näkyvyyttä
  const [selectDesct, setSelectDesc] = useState(""); // Tallentaa valitun kuvan

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  // Avaa modal ja asettaa valitun kuvan
  const handleDesc = (desc) => {
    setSelectDesc(desc);
    setIsModalOpen(true);
    console.log(desc);
  };

  // Sulkee modalin
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectDesc(null);
  };

  const projectData = [
    {
      title: "Leffa Github",
      description:
        "Selaa elokuvia eri hakujen perusteella. Sovelluksessa myös pystyy tallentamaan omiin suosikkeihin ja arvioida elokuvia samalla tai lisätä katselulistalle. Myös teatterit oman sijainnil perusteella löytyvät helposti. Yksilötyö.",
      url: "https://github.com/ilarikoik/mobiiliprojekti",
      img: [Etusivu, suosikit, map],
    },
    {
      title: "Lentäjät Github",
      description:
        "React sekä javalla toteutettu sovellus harraste lentäjille. Sivulla näkyy helposti kaikki lentäjille tarvittavat tiedot nopeasti. Oman lentokentän tiedot voi lisätä jos siellä on laite mikä paikantaa tuulen nopeuden ja muut tiedot. Ryhmätyö.",
      url: "https://github.com/Ryhma-RED-Ohjelmistoprojekti-2/Weatherapp-backend",
      img: lentaja,
    },
    {
      title: "Projekti 3 Github",
      description:
        "Kolmas projekti, joka toteutettiin jollain tavalla. Lisätään kuvaus ja linkki tähän.",
      url: "https://github.com",
      img: stick,
    },
    {
      title: "Projekti 4 Github",
      description:
        "Neljäs projekti, jossa toteutettiin jotain mielenkiintoista. Linkki tulee tänne.",
      url: "https://github.com",
      img: stick,
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
              <>
                <div
                  className="bg-slate-800  rounded-md h-64 w-full p-1 flex flex-col items-center overflow-hidden  md:w-4/5 lg:w-full"
                  key={index}
                >
                  <div className="flex justify-between w-full">
                    <h2
                      onClick={() => handleRedirect(project.url)}
                      className="text-custom-beige hover:underline cursor-pointer"
                    >
                      <strong>{project.title}</strong>
                    </h2>
                    <p
                      className="text-custom-beige hover:underline cursor-pointer"
                      onClick={() => handleDesc(project.description)}
                    >
                      Kuvaus
                    </p>
                  </div>
                  <div className="flex w-full h-full justify-center items-center">
                    {Array.isArray(project.img) && project.img.length > 0
                      ? project.img.map((item, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={item}
                            alt={`Image for ${project.title} ${imgIndex + 1}`} // Add alt text for accessibility
                            style={{
                              width: "32%",
                              height: 240,
                              margin: 3,
                            }}
                          />
                        ))
                      : project.img && (
                          <img
                            src={project.img}
                            alt={`Image for ${project.title}`}
                            style={{
                              width: "95%",
                              height: 240,
                              margin: 3,
                            }}
                          />
                        )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md w-96 h-96 text-olive">
            <button
              className="absolute top-0 right-80 font-"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
