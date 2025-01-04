import { motion } from 'framer-motion';
import { Button } from '@nextui-org/button';

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, label, onClick }) => {
  return (
    <Button
      size="lg"
      variant="bordered"
      onClick={onClick}
      className="
        font-bold text-base
        px-4 py-4 border-3 text-nilton-light border-nilton-light 
        hover:bg-nilton-green/10 transition-colors rounded-full h-24 sm:h-14
      "
    >
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {icon}
        <span className='hidden sm:block'>{label}</span>
      </motion.div>
    </Button>
  );
};

export default ContactCard;
