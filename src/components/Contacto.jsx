import { Formulario } from "./Formulario";
export const Contacto = () => {
  return (
    <>
      <div className="contacto bg-black">
        <div className="container-contacto flex flex-col gap-10 px-7 pt-40 pb-10 md:grid md:grid-cols-2 md:max-w-7xl md:mx-auto  md:gap-10 md:pt-60 md:mt-10 md:pb-10 md:px-5 ">
          <div className="item-contacto">
            <Formulario />
          </div>
          <div className="item-contacto ">
            <h3 className="text-white text-center my-2 text-3xl font-bold uppercase md:text-4xl">
              Ubicación
            </h3>
            <div className="relative h-[360px] md:h-auto">
              <div className="absolute top-0 left-0 w-full h-full ">
                <iframe
                  className="max-h-[350px] max-w-full md:max-h-[450px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.462546286412!2d-103.3555694!3d20.5691599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4d0e6bc8862f%3A0x4b2f46fdf62a834d!2sConsultorio%20Dental%20DELUR!5e0!3m2!1ses-419!2smx!4v1731691699238!5m2!1ses-419!2smx" 
                  style={{ border: 0 }}
                  width="600"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
