import { addNotification } from "@/app/Notification";

export const notificationError = (message: string) => {
  addNotification("error", message);
};

export const notificationSuccess = (message: string) => {
  addNotification("success", message);
};

export const notificationInfo = (message: string) => {
  addNotification("info", message);
};

export const notificationWarning = (message: string) => {
  addNotification("warning", message);
};
