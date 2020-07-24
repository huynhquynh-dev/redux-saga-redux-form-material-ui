import AdminHomePage from "../containers/AdminHomePage";
import Taskboard from "../containers/Taskboard";

export const API_ENDPOINT = "https://huynhquynh.tk";
export const STATUS = [
    {
        value: "0",
        lable: "READY",
    },
    {
        value: "1",
        lable: "IN PROGRESS",
    },
    {
        value: "2",
        lable: "COMPLETED",
    },
];

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202,
};

export const ADMIN_ROUTES = [
    {
        path: "/",
        name: "Trang quản trị",
        exact: true,
        component: AdminHomePage,
    },
    {
        path: "/task-board",
        name: "Quản lý công việc",
        exact: false,
        component: Taskboard,
    },
];
