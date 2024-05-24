import IndexPage from "./Pages/IndexPage"
import ErrorPage from "./Pages/ErrorPage"
import NewToDoList from "./Pages/NewToDoListPage"

export const allRoutes = [
    { component: IndexPage, path: "/", exact: true },
    { component: ErrorPage, path: "/error", exact: true },
    { component: NewToDoList, path: "/new", exact: true }
]