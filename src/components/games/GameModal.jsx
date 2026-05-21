import { Modal } from "react-bootstrap";
import PatchGame from "./PatchGame";
import ZipGame from "./ZipGame";
import SudokuGame from "./SudokuGame";
import TangoGame from "./TangoGame";

const GameModal = ({ game, onHide }) => {
  return (
    <Modal show={!!game} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-capitalize">{game}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {game === "patches" && <PatchGame />}
        {game === "zip" && <ZipGame />}
        {game === "sudoku" && <SudokuGame />}
        {game === "tango" && <TangoGame />}
      </Modal.Body>
    </Modal>
  );
};

export default GameModal;
