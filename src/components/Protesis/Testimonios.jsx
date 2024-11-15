import Ortodoncia1 from "../../assets/protesis/caso-1.webp";
import Ortodoncia2 from "../../assets/protesis/caso-2.webp";
import Ortodoncia3 from "../../assets/protesis/caso-3.webp";
import Ortodoncia4 from "../../assets/protesis/caso-4.webp";
import Ortodoncia5 from "../../assets/protesis/caso-5.webp";
import Ortodoncia6 from "../../assets/protesis/caso-6.webp";
import Ortodoncia7 from "../../assets/protesis/caso-7.webp";
import Ortodoncia8 from "../../assets/protesis/caso-8.webp";
import Ortodoncia9 from "../../assets/protesis/caso-9.webp";
import Ortodoncia10 from "../../assets/protesis/caso-10.webp";
import Ortodoncia11 from "../../assets/protesis/caso-11.webp";

export const Testimonios = () => {
  const CASO1 = [
    {
      id: 1,
      image: Ortodoncia1,
      alt: "Primer caso de éxito",
    },
    {
      id: 2,
      image: Ortodoncia2,
      alt: "Primer caso de éxito",
    },
    {
      id: 3,
      image: Ortodoncia3,
      alt: "Primer caso de éxito",
    },
    {
      id: 4,
      image: Ortodoncia4,
      alt: "Primer caso de éxito",
    },
    {
      id: 5,
      image: Ortodoncia5,
      alt: "Primer caso de éxito",
    },
    {
      id: 6,
      image: Ortodoncia6,
      alt: "Primer caso de éxito",
    },
    {
      id: 7,
      image: Ortodoncia7,
      alt: "Primer caso de éxito",
    },
    {
      id: 8,
      image: Ortodoncia8,
      alt: "Primer caso de éxito",
    },
    {
      id: 9,
      image: Ortodoncia9,
      alt: "Primer caso de éxito",
    },
    {
      id: 10,
      image: Ortodoncia10,
      alt: "Primer caso de éxito",
    },
    {
      id: 11,
      image: Ortodoncia11,
      alt: "Primer caso de éxito",
    },
  ];
  return (
    <>
      <div className="testimonio">
        <div className="container-testimonios px-5 md:max-w-6xl py-5 md:m-auto">
          <div className="item-testimonios">
            <h3 className="title-slider text-center text-2xl  uppercase  md:text-3xl  px-5">
              Caso 1
            </h3>
            <div className="casos grid gap-2 md:grid-cols-3 ">
              {CASO1.map((caso, index) => (
                <div className="item-casos" key={index}>
                  <img
                    src={caso.image}
                    alt={caso.alt}
                    className="max-w-full hover:scale-90 duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};