export default function GeneralRodriguezPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-cyan-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Desarrollos en General Rodríguez
        </h1>

        <p className="text-xl">
          Elegí el proyecto que querés conocer.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/nuevo-horizonte.jpg"
              alt="Nuevo Horizonte"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Nuevo Horizonte
              </h2>

              <a
                href="/GeneralRodriguez/NuevoHorizonte"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
              >
                Ver proyecto
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/nuevo-amanecer.jpg"
              alt="Nuevo Amanecer"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Nuevo Amanecer
              </h2>

              <a
                href="/GeneralRodriguez/NuevoAmanecer"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl inline-block"
              >
                Ver proyecto
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src="/pinares-del-casco.jpg"
              alt="Pinares del Casco"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                Pinares del Casco
              </h2>

              <a
                href="/GeneralRodriguez/PinaresDelCasco"
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