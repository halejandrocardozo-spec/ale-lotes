export default function ParqueCentralPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
<section className="relative h-screen">

  <img
    src="/lote3.jpg"
    alt="Parque Central"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div
  style={{
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 20,
  }}
>
  <h1
    style={{
      color: "white",
      fontSize: "75px",
      fontWeight: "900",
      letterSpacing: "-2px",
      textAlign: "center",
    }}
  >
    Parque Central
  </h1>
</div>

</section>

      {/* INFORMACIÓN */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Información del proyecto
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ubicación
            </h3>

            <p className="text-gray-600">
              Moreno, Buenos Aires.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Financiación
            </h3>

            <p className="text-gray-600">
              Financiación propia hasta 240 cuotas.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Medidas disponibles
            </h3>

            <p className="text-gray-600">
              Próximamente.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Servicios
            </h3>

            <p className="text-gray-600">
              Información disponible al consultar.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
<section className="bg-cyan-500 text-white py-20 text-center">

  <h2 className="text-4xl font-bold mb-6">
    ¿Querés más información?
  </h2>

  <a
    href="#"
    className="bg-white text-cyan-500 px-8 py-4 rounded-2xl font-bold inline-block"
  >
    Solicitar información
  </a>

</section>

</div>
);
}