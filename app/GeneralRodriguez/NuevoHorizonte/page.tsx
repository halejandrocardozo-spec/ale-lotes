export default function NuevoHorizontePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="bg-cyan-500 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <a
            href="/"
            className="bg-white text-cyan-600 px-5 py-2 rounded-xl font-bold"
          >
            Inicio
          </a>

          <a
            href="/Contacto"
            className="bg-white text-cyan-600 px-5 py-2 rounded-xl font-bold"
          >
            Más información
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="/NH1.jpg"
          alt="Nuevo Horizonte"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-8">
            Sobre el desarrollo
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nuevo Horizonte se ubica en Av. Tarija 2601, a solo 50 km de
            Capital Federal y a 3 km del Acceso Oeste, combinando fácil
            acceso con un entorno tranquilo y natural.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ofrecemos lotes con financiación propia hasta en 240 cuotas
            en pesos, con valores accesibles para quienes buscan construir
            su vivienda o realizar una inversión.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Un espacio ideal para construir tu casa, rodeado de vegetación
            y pensado para disfrutar de la tranquilidad sin alejarte de la ciudad.
          </p>

        </div>
      </section>

      {/* DATOS DESTACADOS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-cyan-500 mb-3">
              300
            </h3>
            <p className="text-gray-600">
              m² por lote
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-cyan-500 mb-3">
              3 km
            </h3>
            <p className="text-gray-600">
              del Acceso Oeste
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-cyan-500 mb-3">
              240
            </h3>
            <p className="text-gray-600">
              cuotas disponibles
            </p>
          </div>

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            ¿Qué hace especial a Nuevo Horizonte?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white shadow-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Financiación propia
              </h3>

              <p className="text-gray-600">
                Hasta 240 cuotas en pesos, sin bancos ni intermediarios.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Infraestructura sólida
              </h3>

              <p className="text-gray-600">
                Desarrollamos toda la infraestructura para disfrutar tu lote.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Naturaleza y ubicación
              </h3>

              <p className="text-gray-600">
                Entorno natural con cercanía a la ciudad.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Barrio abierto
              </h3>

              <p className="text-gray-600">
                Sin expensas y con código de construcción.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Galería
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <img src="/NH1.jpg" className="rounded-3xl h-80 w-full object-cover" />
            <img src="/NH2.jpg" className="rounded-3xl h-80 w-full object-cover" />
            <img src="/NH3.jpg" className="rounded-3xl h-80 w-full object-cover" />
            <img src="/NH4.jpg" className="rounded-3xl h-80 w-full object-cover" />

          </div>

        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Ubicación
          </h2>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4608.325998892847!2d-58.90379609057866!3d-34.6288662190555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1780603411365!5m2!1ses-419!2sar"
              width="100%"
              height="500"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-500 text-white py-20 px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          ¿Querés recibir más información?
        </h2>

        <p className="text-xl mb-8">
          Completá el formulario y te contactaremos a la brevedad.
        </p>

        <a
          href="/Contacto"
          className="bg-white text-cyan-600 px-8 py-4 rounded-2xl font-bold inline-block"
        >
          Solicitar información
        </a>

      </section>

    </div>
  );
}