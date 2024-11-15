import Promo1 from '../../assets/promos/promo.jpg'

export const Promocion = () => {

  const imagenesPromo = [Promo1, Promo1, Promo1, Promo1]

  return (
    <>
      <section className="w-full py-8 " id="promociones">
        <h2 className="text-2xl font-bold text-center uppercase md:text-3xl mb-3">
          Nuestras promociones
        </h2>
        <div className="container-promos w-[90%] m-auto grid gap-3 md:grid-cols-2 md:max-w-6xl">

          {
            imagenesPromo.map(img => {
              return (
                <figure>
                  <img
                    src={img}
                    alt=""
                    className="max-w-[100%] md:hover:scale-95 duration-500"
                  />
                </figure>
              )
            })
          }
        </div>
      </section>
    </>
  );
};
