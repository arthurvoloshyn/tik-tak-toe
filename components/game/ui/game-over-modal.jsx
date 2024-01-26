import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal";

export function GameOverModal({ winnerName, players, onClose }) {
  return (
    <UiModal width="md" isOpen={winnerName} onClose={onClose}>
      <UiModal.Header>Game over!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winner: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Back
        </UiButton>
        <UiButton size="md" variant="primary">
          Play again
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
