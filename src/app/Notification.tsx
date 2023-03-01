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
  description: React.ReactNode,
  message: React.ReactNode
) {
  notificationInstance.info({
    message,
    description,
    placement: "topRight",
  });
}

export default Notification;
