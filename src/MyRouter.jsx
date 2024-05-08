import { Route, Routes, Navigate } from "react-router-dom"
import { allRoutes } from "../src/routes"

const MyRouter = () => {
    return (
        <Routes>
            {allRoutes.map(route =>
                <Route Component={route.component} path={route.path} exact={route.exact} key={route.component} />
            )}
            <Route path="/*" element={<Navigate to="/error" />} key = "errorPageKey" />
        </Routes>
    )
}

export default MyRouter