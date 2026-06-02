export default function EscobarPage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="bg-cyan-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Desarrollos en Escobar
        </h1>

        <p className="text-xl">
          Conocé todos los proyectos disponibles.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Cerro Rico 1
          </h2>

          <p className="text-gray-600 mb-3">
            Reserva desde $4.191.600
          </p>

          <p className="text-gray-600 mb-6">
            Cuotas desde $249.500
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
            Cerro Rico 2
          </h2>

          <p className="text-gray-600 mb-3">
            Reserva desde $4.191.600
          </p>

          <p className="text-gray-600 mb-6">
            Cuotas desde $249.500
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
            Cerro Rico 3
          </h2>

          <p className="text-gray-600 mb-3">
            Reserva desde $4.191.600
          </p>

          <p className="text-gray-600 mb-6">
            Cuotas desde $249.500
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