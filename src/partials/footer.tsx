import { motion } from "framer-motion";
import { Link } from "@nextui-org/react";

export const Footer = () => {
  return (
    <motion.footer
      className="bg-background/70 backdrop-blur-md border-b w-full flex flex-col items-center justify-center py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-sm flex items-center gap-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        © {new Date().getFullYear()}
        <Link
          isExternal
          className="text-current ml-1 text-nilton-green font-extrabold"
          href="https://www.linkedin.com/in/nilton-ramos-encarnacion-0819b433b/"
          title="LinkedIn"
        >
          <span className="hidden sm:block">Nilton Ramos Encarnacion</span>
          <span className="block sm:hidden">Nilton</span>
        </Link>
        <span className="ml-1">Todos los derechos reservados.</span>
      </motion.div>
    </motion.footer>
  );
};
