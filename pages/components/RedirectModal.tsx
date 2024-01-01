import React from 'react';
import { useRouter } from 'next/router';

interface RedirectModalProps {
  isOpen: boolean;
  redirect: () => void;
}

const RedirectModal: React.FC<RedirectModalProps> = ({ isOpen, redirect }) => {
  const router = useRouter();


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-emerald-900">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-white">Thanks!</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-300">Lets see the gallery...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectModal;
