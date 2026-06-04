export default function NuevoAmanecerPage() {
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
          src="/NA1.jpg"
          alt="Nuevo Amanecer"
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
            Barrio Nuevo Amanecer se ubica sobre el Camino a Navarro,
            a 55 km de Capital Federal y a minutos del Acceso Oeste,
            combinando excelente conectividad con un entorno tranquilo y natural.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ofrecemos lotes multifamiliares, permitiendo construir más de una
            vivienda por lote, con financiación propia de hasta 240 cuotas
            en pesos y valores accesibles.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            El barrio cuenta con tendido eléctrico, pilar de luz,
            amojonamiento por agrimensor, red de cloacas y red de agua,
            un diferencial clave en la zona.
          </p>

        </div>
      </section>

      {/* DATOS DESTACADOS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-cyan-500 mb-3">
              300-600
            </h3>
            <p className="text-gray-600">
              m² por lote
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-cyan-500 mb-3">
              5 km
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
            ¿Qué hace especial a Nuevo Amanecer?
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
                Infraestructura completa
              </h3>

              <p className="text-gray-600">
                Red eléctrica, agua, cloacas y amojonamiento profesional.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Lotes multifamiliares
              </h3>

              <p className="text-gray-600">
                Posibilidad de construir más de una vivienda por lote.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Barrio abierto
              </h3>

              <p className="text-gray-600">
                Sin expensas y con excelente potencial de crecimiento.
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

            <img src="/NA1.jpg" className="rounded-3xl h-80 w-full object-cover" />
            <img src="/NA2.jpg" className="rounded-3xl h-80 w-full object-cover" />
            <img src="/NA3.jpg" className="rounded-3xl h-80 w-full object-cover" />
            <img src="/NA4.jpg" className="rounded-3xl h-80 w-full object-cover" />

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
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5480.587006931907!2d-58.97323488899439!3d-34.62382551107589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1780604276688!5m2!1ses-419!2sar"
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
  )
}