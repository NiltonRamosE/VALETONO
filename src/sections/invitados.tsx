import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function InvitadosSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center px-8 py-12 lg:px-20 lg:py-16 gap-12 overflow-hidden">
      {/* Título Principal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 text-center mb-8"
      >
        <FaStar className="text-nilton-neon text-5xl" />
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Invitados Especiales
        </h1>
      </motion.div>

      {/* Contenido Principal */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
        {/* Columna Izquierda: Imagen Principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center w-full lg:w-1/2"
        >
          <div className="relative w-3/4 lg:w-full max-w-md flex items-center justify-center">
            <img
              src="vale-photo-3.png"
              alt="Invitado Principal"
              className="w-full rounded-full object-cover shadow-[0_10px_20px_-5px_rgba(0,0,0,0.6)]"
            />
          </div>
        </motion.div>

        {/* Columna Derecha: Imágenes más pequeñas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
        >
          {/* Invitado 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="invitado-1.png"
              alt="Invitado 1"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-2 font-semibold text-white text-sm">Invitado 1</h3>
          </div>

          {/* Invitado 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="invitado-2.png"
              alt="Invitado 2"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-2 font-semibold text-white text-sm">Invitado 2</h3>
          </div>

          {/* Invitado 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="invitado-3.png"
              alt="Invitado 3"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-2 font-semibold text-white text-sm">Invitado 3</h3>
          </div>

          {/* Invitado 4 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="invitado-4.png"
              alt="Invitado 4"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-2 font-semibold text-white text-sm">Invitado 4</h3>
          </div>

          {/* Invitado 5 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="invitado-5.png"
              alt="Invitado 5"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-2 font-semibold text-white text-sm">Invitado 5</h3>
          </div>

          {/* Invitado 6 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="invitado-6.png"
              alt="Invitado 6"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-2 font-semibold text-white text-sm">Invitado 6</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
