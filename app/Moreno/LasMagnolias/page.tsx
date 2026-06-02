export default function LasMagnoliasPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-screen">

        <img
          src="/lote4.jpg"
          alt="Las Magnolias"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div
          style={{
            position: "absolute",
            top: "12%",
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "90px",
              fontWeight: "900",
              textShadow: "0 4px 15px rgba(0,0,0,0.5)",
            }}
          >
            Las Magnolias
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
              Próximamente.
            </p>
          </div>

        </div>

      </section>

      {/* GALERÍA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold mb-8">
          Galería
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
            Próximamente
          </div>

          <div className="h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
            Próximamente
          </div>

          <div className="h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
            Próximamente
          </div>

        </div>

      </section>

    </div>
  );
}