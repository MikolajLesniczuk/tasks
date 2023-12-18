import React, { useState, useEffect } from "react";
import s from "./modalDelay.module.scss";
import { Modal } from "./modal";

export const ModalDelay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasModalDelayed, setHasModalDelayed] = useState(false);

  useEffect(() => {
    let timerId;

    const handleMouseMove = (event) => {
      const mouseY = event.clientY;
      if (!isModalOpen && mouseY <= 15) {
        setIsModalOpen(true);
        timerId = setTimeout(() => {
          setHasModalDelayed(true);
        }, 5000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    if (!isModalOpen && !hasModalDelayed) {
      timerId = setTimeout(() => {
        setIsModalOpen(true);
        setHasModalDelayed(true);
      }, 30000);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timerId);
    };
  }, [isModalOpen, hasModalDelayed]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className={s.modalOverlay}>
          <div className={s.modalContent}>
            <div>
              <Modal closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
