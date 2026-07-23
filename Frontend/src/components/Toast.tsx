interface ToastProps {
  message: string;
  type?: "success" | "error";
}

const Toast = ({ message, type = "success" }: ToastProps) => {
  return (
    <div
      className={`
        fixed
        top-6
        right-6
        z-50
        px-6
        py-4
        rounded-xl
        text-white
        shadow-xl
        animate-fadeIn
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {message}
    </div>
  );
};

export default Toast;
