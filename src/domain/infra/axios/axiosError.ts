import { AxiosError } from "axios";
import { notificationError } from "../notification/notificationActions";

export const axiosError = (err: any) => {
  const error = err as AxiosError;

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error);

    const errorStatus = error.response.status;
    const { errorContent } = error.response.data ?? ({} as any);

    if (errorContent) {
      notificationError(
        "Axios Error",
        `${errorContent.value} ${errorContent.message}`
      );
    } else if (errorStatus === 502) {
      notificationError("Axios Error", "Bad Gateway");
    } else {
      notificationError("Axios Error", error.message);
      console.log("Server cannot be reached");
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    notificationError("Axios Error", "Server cannot be reached");
    console.log("Error", error.message);
  }
};
