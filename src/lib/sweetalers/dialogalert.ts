import Swal from "sweetalert2";

export const dialogAlert = ({ title,message, type = "error" || "success" }: any) => {
  Swal.fire({
    title: title,
    text: message,
    icon: type,
  });
};
