export default function EscobarPage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="bg-cyan-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Desarrollos en Escobar
        </h1>

        <p className="text-xl">
          Elegí el proyecto que querés conocer.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/cerro-rico-1.jpg"
              alt="Cerro Rico 1"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Cerro Rico 1
              </h2>

              <a
                href="/Escobar/CerroRico1"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
              >
                Ver proyecto
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/cerro-rico-2.jpg"
              alt="Cerro Rico 2"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Cerro Rico 2
              </h2>

              <a
                href="/Escobar/CerroRico2"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
              >
                Ver proyecto
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/cerro-rico-3.jpg"
              alt="Cerro Rico 3"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Cerro Rico 3
              </h2>

              <a
                href="/Escobar/CerroRico3"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
              >
                Ver proyecto
              </a>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}