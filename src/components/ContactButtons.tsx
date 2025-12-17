"use client";

import React from 'react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';

interface ContactButtonsProps {
  phoneNumber?: string;
  whatsappNumber?: string;
}

const ContactButtons = ({
  phoneNumber = "+905452145949",
  whatsappNumber = "+905452145949",
}: ContactButtonsProps) => {

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 items-end">
      {/* WhatsApp Button - Always Visible */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl hover:bg-green-700 hover:shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-300 relative group border-4 border-white"
        title="WhatsApp'ta Bize Yazın"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring opacity-20"></div>
        <svg
          fill="currentColor"
          className="w-8 h-8 relative z-10 animate-bounce-slow"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.02.99 4.34L2.05 22l6.5-2.13C10.96 21.59 11.97 22 13 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.87 0-1.72-.19-2.5-.55l-.18-.1-1.82.6.61-1.8-.1-.18C4.78 16.55 4 14.85 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.64-6.67c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.24-.64.81-.79.97-.15.17-.3.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.24.26-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.89-.2-.49-.4-.42-.57-.43h-.5c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.13.17 1.77 2.71 4.3 3.8 1.87.82 2.49.81 3.3.68.44-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29z" />
        </svg>
      </a>

      {/* Phone Button - Always Visible */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 hover:shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-300 relative group border-4 border-white"
        title="Bizi Arayın"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse-ring opacity-20"></div>
        <svg
          fill="currentColor"
          className="w-8 h-8 relative z-10 animate-motorcycle"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      </a>
    </div>
  );
};

export default ContactButtons;
