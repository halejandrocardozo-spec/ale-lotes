export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Solicitar Información
        </h1>

        <form className="space-y-8">

          <input
  type="text"
  placeholder="Nombre y apellido"
  className="w-full p-4 border-2 border-gray-300 rounded-xl"
/>

<input
  type="tel"
  placeholder="Teléfono"
  className="w-full p-4 border-2 border-gray-300 rounded-xl"
/>

<input
  type="email"
  placeholder="Correo electrónico"
  className="w-full p-4 border-2 border-gray-300 rounded-xl"
/>

<select
  className="w-full p-4 border-2 border-gray-300 rounded-xl"
>
  <option>Parque Central</option>
  <option>Las Magnolias</option>
</select>

          <textarea
            placeholder="Mensaje"
            rows={5}
            className="w-full p-4 border-2 border-gray-300 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold"
          >
            Enviar consulta
          </button>

        </form>

      </div>

    </div>
  );
}