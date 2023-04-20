import { create } from 'zustand';
interface RegisterModalStore {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}
const useRegisterModal = create<RegisterModalStore>((set) => ({
   isOpen: true,
   onOpen: () => set({ isOpen: false }),
   onClose: () => set({ isOpen: true }),
}));
export default useRegisterModal;
