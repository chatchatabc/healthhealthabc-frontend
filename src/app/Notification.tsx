"use client";

import { notification } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";
import React from "react";

let notificationInstance: NotificationInstance;

function Notification() {
  const [api, contextHolder] = notification.useNotification();
  notificationInstance = api;
  return contextHolder;
}

export function addNotification(
  message: React.ReactNode,
  description: React.ReactNode,
  type: "success" | "info" | "warning" | "error" = "info"
) {
  notificationInstance[type]({
    message,
    description,
    placement: "topRight",
  });
}

export default Notification;
