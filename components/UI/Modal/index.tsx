'use client';

import React from 'react';

interface IProps {
  isOpen: boolean;
  handleAction: (index: number) => void;
  handleActionClick: () => void;
  closeModal: () => void;
  title: String;
}

function Modal({ isOpen, closeModal, title, handleAction, handleActionClick }: IProps) {
  console.log(handleAction);
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div className="relative p-8 bg-white dark:bg-gray-800 w-full max-w-md rounded-lg">
            <button
              type="button"
              className="absolute top-0 right-0 m-4 text-lg font-semibold text-gray-600 dark:text-gray-400"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-black dark:text-white mb-5">{title}</h1>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-5"
                  onClick={handleActionClick}
                >
                  Yes
                </button>

                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
