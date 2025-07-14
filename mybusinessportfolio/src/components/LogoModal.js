// LogoModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";

function LogoModal({ show, handleClose, logoSmall, logoMedium, logoLarge }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Download or Print Logo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>Select a size to download:</p>
        <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
          <a href={logoSmall} download="MomPopLogo_Small.jpeg">
            Small (150px)
          </a>
          <a href={logoMedium} download="MomPopLogo_Medium.jpeg">
            Medium (300px)
          </a>
          <a href={logoLarge} download="MomPopLogo_Large.jpeg">
            Large (600px)
          </a>
        </div>
        <Button
          variant="outline-secondary"
          onClick={() => {
            const printWindow = window.open(logoLarge, "_blank");
            printWindow?.focus();
            printWindow?.print();
          }}
        >
          Print Logo
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default LogoModal;
