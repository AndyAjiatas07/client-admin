import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage.jsx";
import { DashboardPage } from "../layouts/DashboardPage.jsx";
import { Fields } from "../../features/fields/components/Fields.jsx";
import { FieldModal } from "../../features/fields/components/FieldModal.jsx";
import { Reservations } from "../../features/reservations/components/Reservations.jsx";
import { Teams } from "../../features/teams/components/Teams.jsx";
import { Tournaments } from "../../features/tournaments/components/Tournaments.jsx";
import { Fields as AdminFields } from "../../features/userAdmin/components/Fields.jsx";
import { Users } from "../../features/users/components/Users.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<AuthPage />} />

      {/* Layout para el dashboard */}
      <Route path="/dashboard/*" element={<DashboardPage />}>
        
        {/* Rutas internas del Dashboard */}
        <Route path="fields" element={<Fields />} />
        <Route path="field-modal" element={<FieldModal />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="teams" element={<Teams />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="users" element={<Users />} />
        
        {/* Rutas de administración */}
        <Route path="admin/fields" element={<AdminFields />} />
        {/* Agrega las demás rutas */}
      </Route>

      {/* Resto de las rutas */}
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};