import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './modalPreview.css';

function ModalPreview({ isOpen, onClose, imageSrc, altText }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-preview-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-preview-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={imageSrc} alt={altText} />
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalPreview;
