import { toast } from "react-toastify";

export const notifyError = (errorMsg = "") => {
  const errorText = errorMsg || "Something went wrong! Please try again.";
  toast.error(errorText, {
    toastId: "errorToast",
    position: "bottom-right",
    theme: "dark",
    closeButton: false,
  });
};

export const notifySuccess = (successMsg = "") => {
  const successText = successMsg || "Something went wrong! Please try again.";
  toast.success(successText, {
    toastId: "successToast",
    position: "bottom-right",
    theme: "dark",
    closeButton: false,
  });
};
