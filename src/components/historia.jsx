export default function Historia({ aos }) {
  return (
    <div
      data-aos={aos}
      className="bg-custom-beige text-olive h-96 flex flex-col justify-evenly items-center mt-2"
    >
      <h1 className="font-bold text-4xl p-3 text-olive">Työhistoria</h1>
      <p className="font-bold text-xl p-3 text-olive">
        Varasto n. 2kk kesälomalla
      </p>
      <p className="font-bold text-xl p-3 text-olive">Sauntalo n. 2 vuotta</p>
      <p className="font-bold text-xl p-3 text-olive">Mijorak n. 2 vuotta</p>
      <p className="font-bold text-xl p-3 text-olive">
        Eri vuokrafirmojen kautta rakennushommissa
      </p>
    </div>
  );
}
