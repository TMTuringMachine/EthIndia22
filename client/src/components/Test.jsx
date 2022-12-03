import React, { useState } from 'react';
import DropFile from './DropFile';
import { uploadBook } from '../hooks/useBook';

const Test = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DropFile
      state={isOpen}
      customSaveHandler={uploadBook}
      toggleModal={toggleModal}
    />
  );
};

export default Test;
