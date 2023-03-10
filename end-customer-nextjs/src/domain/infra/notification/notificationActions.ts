import { ReactNode } from "react";
import { addNotification } from "@/app/Notification";

export const notificationError = (
  message: ReactNode,
  description: ReactNode
) => {
  addNotification(message, description, "error");
};

export const notificationSuccess = (
  message: ReactNode,
  description: ReactNode
) => {
  addNotification(message, description, "success");
};

export const notificationInfo = (
  message: ReactNode,
  description: ReactNode
) => {
  addNotification(message, description, "info");
};

export const notificationWarning = (
  message: ReactNode,
  description: ReactNode
) => {
  addNotification(message, description, "warning");
};
