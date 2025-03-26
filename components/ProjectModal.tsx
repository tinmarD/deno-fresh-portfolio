import { h } from "preact";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: preact.ComponentChildren;
}) {
  if (!isOpen) return null;

  return (
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking outside the content
    >
      <div
        class="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        {/* Close Button */}
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose} // Close modal when clicking the cross
        >
          ✕
        </button>
        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
}