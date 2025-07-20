// LogoModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";

function LogoModal({ show, handleClose }) {
  const logoPath = "/favicon.ico";

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Download or Print Logo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img
          src={logoPath}
          alt="Logo Preview"
          style={{ cursor: "pointer", width: "200px", height: "auto", marginBottom: "1rem" }}
        />
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a
            href={logoPath}
            download="MomPopLogo.ico"
            className="btn btn-primary"
          >
            Download
          </a>
          <Button
            variant="outline-secondary"
            onClick={() => {
              const printWindow = window.open(logoPath, "_blank");
              printWindow?.focus();
              printWindow?.print();
            }}
          >
            Print Logo
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LogoModal;
