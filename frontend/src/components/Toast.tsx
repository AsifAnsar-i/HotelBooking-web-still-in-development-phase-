import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  const styles =
    type === "SUCCESS"
      ? " z-40 fixed bottom-4 left-0 right-0 mx-auto bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-[#52050a] p-4 rounded text-white max-w-xs"
      : " z-40 fixed bottom-4 left-0 right-0 mx-auto bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-[#52050a] p-4 rounded text-white max-w-xs";
  return (
    <div className={styles}>
      <div className="flex justify-center items-center   ">
        <p className="text-lg font-semibold text-[#52050a] ">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
