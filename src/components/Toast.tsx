import { useStore } from "../context/StoreContext";

export default function Toast() {
  const { toastMessage } = useStore();

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-[#0a1128] px-6 py-3 font-accent text-xs uppercase tracking-wide text-white shadow-2xl transition-all duration-500 ${
        toastMessage ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {toastMessage}
    </div>
  );
}
