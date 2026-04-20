import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage.jsx";
import { DashboardPage } from "../layouts/DashboardPage.jsx";

// auth
import { Spinner } from "@material-tailwind/react";
import { ResetPasswordForm } from "../../features/auth/components/ResetPasswordForm.jsx";
import { ShowConfirmToast } from "../../features/auth/components/ShowConfirmToast.jsx";

// fields
import { Fields } from "../../features/fields/components/Fields.jsx";
import { FieldModal } from "../../features/fields/components/FieldModal.jsx";

// reservations
import { Reservations } from "../../features/reservations/components/Reservations.jsx";

// teams
import { Teams } from "../../features/teams/components/Teams.jsx";
import { TeamModal } from "../../features/teams/components/TeamModal.jsx";

// tournaments
import { Tournaments } from "../../features/tournaments/components/Tournaments.jsx";
import { TournamentModal } from "../../features/tournaments/components/TournamentModal.jsx";

// userAdmin
import { Fields as AdminFields } from "../../features/userAdmin/components/Fields.jsx";
import { Reservations as AdminReservations } from "../../features/userAdmin/components/Reservations.jsx";
import { Teams as AdminTeams } from "../../features/userAdmin/components/Teams.jsx";
import { Tournaments as AdminTournaments } from "../../features/userAdmin/components/Tournamenst.jsx";

// userManagement
import { Settings as UserManagementSettings } from "../../features/userManagement/components/Settings.jsx";

// users
import { CreateUserModal } from "../../features/users/components/CreateUserModal.jsx";
import { Settings } from "../../features/users/components/Settings.jsx";
import { UserComboBox } from "../../features/users/components/UserComboBox.jsx";
import { UserDetailModal } from "../../features/users/components/UserDetailModal.jsx";
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