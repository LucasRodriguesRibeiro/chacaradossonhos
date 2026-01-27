
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface Props {
  className?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'fixed';
}

const WhatsAppButton: React.FC<Props> = ({ 
  className = "", 
  label = "Quero conhecer pelo WhatsApp",
  variant = 'primary'
}) => {
  const baseStyles = "flex items-center justify-center gap-2 font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-full shadow-lg";
  
  const variants = {
    primary: "bg-[#25D366] text-white py-4 px-8 text-lg md:text-xl",
    secondary: "bg-white text-[#25D366] border-2 border-[#25D366] py-3 px-6 text-base",
    fixed: "bg-[#25D366] text-white p-4 whatsapp-pulse fixed bottom-6 right-6 z-50 rounded-full"
  };

  if (variant === 'fixed') {
    return (
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variants.fixed} ${className}`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    );
  }

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-6 h-6" />
      <span>{label}</span>
    </a>
  );
};

export default WhatsAppButton;
