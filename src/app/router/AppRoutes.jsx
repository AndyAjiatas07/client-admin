import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage.jsx";
import { DashboardPage } from "../layouts/DashboardPage.jsx";
import {Fields} from "../../features/fields/components/Fields.jsx";
import {Reservations} from "../../features/reservations/components/Reservations.jsx";
import {Teams} from "../../features/teams/components/Teams.jsx";


export const AppRoutes = ()=> {

    return(
        <Routes>

            {/* PUBLIC */}
            <Route path="/" element={<AuthPage/>} />


            {/* PROTECTED + ROLE */}
            <Route
                path="/dashboard/*" element={<DashboardPage />}
            />

            <Route
                path="/dashboard/fields" element={<Fields />}
            />

            <Route
                path="/dashboard/reservations" element={<Reservations />}
            />

            <Route
                path="/dashboard/teams" element={<Teams />}
            />


            {/* Ruta temporal para pruebas */}
            <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
    );
}