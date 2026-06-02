export default function MorenoPage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="bg-cyan-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Desarrollos en Moreno
        </h1>

        <p className="text-xl">
          Elegí el proyecto que querés conocer.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/parque-central.jpg"
              alt="Parque Central"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Parque Central
              </h2>

              <a
                href="/Moreno/ParqueCentral"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
              >
                Ver proyecto
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/las-magnolias.jpg"
              alt="Las Magnolias"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Las Magnolias
              </h2>

              <a
                href="/Moreno/LasMagnolias"
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