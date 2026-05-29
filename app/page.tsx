export default function LandingLoteos() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
<section
  className="relative min-h-screen flex items-center px-6 overflow-hidden"
  style={{
    backgroundImage: "url('/lote3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* OSCURECER IMAGEN */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* CONTENIDO */}
  <div className="relative z-10 max-w-6xl mx-auto w-full">
    <div className="max-w-2xl">
      
      <p className="uppercase tracking-[4px] text-sm text-cyan-300 mb-6">
        ALE.LOTES
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
        Tu lote propio,
        <br />
        financiado en cuotas
      </h1>

      <p className="text-xl text-gray-200 mb-10 leading-relaxed">
        Loteos en Mariano Acosta, Moreno y General Rodríguez.
        Barrios abiertos y cerrados con financiación accesible,
        escritura y excelente ubicación.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        
        <a
          href="https://wa.me/5491124010069"
          className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-10 py-5 rounded-full transition"
        >
          Consultar
        </a>

        <a
          href="#proyectos"
          className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-5 rounded-full transition"
        >
          Ver proyectos
        </a>

      </div>
    </div>
  </div>
</section>
      {/* BENEFICIOS */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            ¿Por qué elegir nuestros loteos?
          </h2>
          <p className="text-gray-600 text-lg">
            Oportunidades reales para vivir o invertir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Financiación flexible</h3>
            <p className="text-gray-600 leading-relaxed">
              Anticipos accesibles y cuotas pensadas para que puedas avanzar
              sin depender de créditos bancarios.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Excelente ubicación</h3>
            <p className="text-gray-600 leading-relaxed">
              Proyectos cerca de accesos principales, asfalto y zonas de gran
              crecimiento.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Inversión segura</h3>
            <p className="text-gray-600 leading-relaxed">
              Lotes con gran potencial de valorización para vivienda o renta.
            </p>
          </div>
        </div>
      </section>

     {/* PROYECTOS */}
<section id="proyectos" className="py-20 px-6 bg-[#f5f7fa]">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold mb-4 text-[#111827]">
  Proyectos destacados
</h2>

      <p className="text-[#6b7280] text-lg">
        Elegí la zona que mejor se adapte a tu objetivo.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      
      {/* CARD 1 */}
      <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
          alt="Mariano Acosta"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-[#111827]">
            Mariano Acosta
          </h3>

          <p className="text-[#6b7280] mb-5">
            Barrio cerrado con seguridad privada, financiación en cuotas y
            lotes desde 700m².
          </p>

          <a
            href="https://wa.me/5491124010069"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Consultar
          </a>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
        <img
          src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop"
          alt="Moreno"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-[#111827]">
            Moreno
          </h3>

          <p className="text-[#6b7280] mb-5">
            Lotes con escritura y cuotas accesibles en una zona en pleno
            desarrollo.
          </p>

          <a
            href="https://wa.me/5491124010069"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Consultar
          </a>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop"
          alt="General Rodríguez"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-[#111827]">
            General Rodríguez
          </h3>

          <p className="text-[#6b7280] mb-5">
            Oportunidades ideales para inversión con acceso rápido y gran
            proyección.
          </p>

          <a
            href="https://wa.me/5491124010069"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Consultar
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* CTA */}
<section className="bg-[#00bcd4] text-white py-20 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-5xl font-bold mb-6">
      ¿Querés conocer opciones disponibles?
    </h2>

    <p className="text-white/90 text-xl mb-10 leading-relaxed">
      Te asesoro personalmente para encontrar el lote ideal según tu
      presupuesto y objetivo.
    </p>

    <a
      href="https://wa.me/5491124010069"
      className="bg-white text-[#00bcd4] px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition inline-block"
    >
      Hablar por WhatsApp
    </a>
  </div>
</section>

{/* FOOTER */}
<footer className="py-10 text-center text-[#6b7280] text-sm bg-[#f5f7fa]">
  © 2026 Ale.Lotes — Todos los derechos reservados.
</footer>    </div>
  )
}