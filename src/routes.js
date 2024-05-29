import IndexPage from "./Pages/IndexPage"
import ErrorPage from "./Pages/ErrorPage"
import NewToDoListPage from "./Pages/NewToDoListPage"

export const allRoutes = [
    { component: IndexPage, path: "/", exact: true },
    { component: ErrorPage, path: "/error", exact: true },
    { component: NewToDoListPage, path: "/new", exact: true }
]