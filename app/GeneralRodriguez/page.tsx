export default function GeneralRodriguezPage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="bg-cyan-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Desarrollos en General Rodríguez
        </h1>

        <p className="text-xl">
          Oportunidades de inversión y vivienda con financiación propia.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Nuevo Horizonte
          </h2>

          <p className="text-gray-600 mb-3">
            Reserva desde $3.062.265
          </p>

          <p className="text-gray-600 mb-6">
            Cuotas desde $182.277
          </p>

          <a
            href="https://wa.me/5491124010069"
            className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Nuevo Amanecer
          </h2>

          <p className="text-gray-600 mb-6">
            Financiación propia hasta 240 cuotas.
          </p>

          <a
            href="https://wa.me/5491124010069"
            className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Pinares del Casco
          </h2>

          <p className="text-gray-600 mb-6">
            Excelente ubicación y gran potencial de valorización.
          </p>

          <a
            href="https://wa.me/5491124010069"
            className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
          >
            Consultar por WhatsApp
          </a>
        </div>

      </section>

    </div>
  );
}