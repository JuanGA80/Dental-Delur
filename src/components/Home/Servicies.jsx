import Servicio1 from "../../assets/tratamientos/odontopediatria.jpeg";
import Servicio2 from "../../assets/tratamientos/ortodoncia.jpeg"
import Servicio3 from "../../assets/tratamientos/diseno-sonrisa.webp";
import Servicio4 from "../../assets/endodoncia.webp";
import Servicio5 from "../../assets/protesis.webp";
import Servicio6 from "../../assets/tratamientos/cirugia-maxi.webp";
import Servicio7 from "../../assets/tratamientos/implantes-dentales.jpg";
import Servicio8 from "../../assets/periodoncia.webp";
import Servicio9 from "../../assets/aclaramiento.jpg";

export const Servicies = () => {
  const Servicios = [
    {
      id: 1,
      title: "Odontopediatría",
      imgSrc: Servicio1,
    },
    {
      id: 2,
      title: "Ortodonica",
      imgSrc: Servicio2,
    },
    {
      id: 3,
      title: "Implantología dental",
      imgSrc: Servicio7,
    },
    {
      id: 4,
      title: "Endodoncia",
      imgSrc: Servicio4,
    },
    {
      id: 5,
      title: "Prótesis",
      imgSrc: Servicio5,
    },
    {
      id: 6,
      title: "Cirugía maxilofacial",
      imgSrc: Servicio6,
    },
    {
      id: 7,
      title: "Diseño de sonrisa",
      imgSrc: Servicio3,
    },
    {
      id: 8,
      title: "Periodoncia",
      imgSrc: Servicio8,
    },
    {
      id: 8,
      title: "Desmanchamiento y Aclaramiento",
      imgSrc: Servicio9,
    },
  ];
  return (
    <>
      <section
        className="servicios w-full pt-8 pb-4 px-5 md:pt-12 md:pb-4 "
        id="servicios"
      >
        <h2 className="text-2xl font-bold text-center uppercase md:text-3xl">
          Nuestros Servicios
        </h2>
        <div className="container-servicios grid grid-rows-8 gap-4 md:grid-cols-3 my-5  md:max-w-7xl md:m-auto md:gap-5 md:grid-rows-3 md:my-4">
          {Servicios.map((servicio, i) => (
            <div className="item-servicios bre" key={i}>
                <img
                  src={servicio.imgSrc}
                  alt=""
                  className="max-h-full rounded-lg"
                  style={{aspectRatio: '16/10'}}
                />
                <h3 className="text-center font-medium mt-2">
                  {servicio.title}
                </h3>
              </div>
          ))}
        </div>
      </section>
    </>
  );
};
