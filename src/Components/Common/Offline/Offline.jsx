import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from "/images/logos/logo.svg";

const Offline = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark">
      <img
        src={logo}
        alt="logo"
        className="size-48 w-auto hover:rotate-[360deg] duration-1000"
      />
      <h1 className="text-4xl font-bold text-white  mb-4">
        {t('offline.title')}
      </h1>
      <p className="text-sm lg:text-lg text-white mb-6 text-center">
        {t('offline.message')}
      </p>
      <button
        className="bg-primary text-white px-6 py-2 lg:py-3 rounded-md w-3/5 lg:w-1/5 shadow-md hover:bg-primary hover:bg-opacity-80 transition-all"
        onClick={() => window.location.reload()}
      >
        {t('offline.retryButton')}
      </button>
    </div>
  );
};

export default Offline;