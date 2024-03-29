import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Modal({ isOpen, setIsOpen, headTitle, children }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white rounded-sm  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b-2"
                  >
                    <div className="flex items-center justify-between px-6 py-2 bg-white text-black">
                      <h3 className="text-xl font-semibold">{headTitle}</h3>
                      <button onClick={() => setIsOpen(false)}>
                        <XCircleIcon className="w-5 h-5 text-black" />
                      </button>
                    </div>
                  </Dialog.Title>
                  <div>{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  headTitle: PropTypes.string,
  children: PropTypes.node,
};
