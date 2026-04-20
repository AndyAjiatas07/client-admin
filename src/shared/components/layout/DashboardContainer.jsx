import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

// features/auth
import { Spinner } from "@material-tailwind/react";
import { ResetPasswordForm } from "../../../features/auth/components/ResetPasswordForm";
import { ShowConfirmToast } from "../../../features/auth/components/ShowConfirmToast";

// features/fields
import { Fields } from "../../../features/fields/components/Fields";
import { FieldModal } from "../../../features/fields/components/FieldModal";

// features/teams
import { TeamModal } from "../../../features/teams/components/TeamModal";
import { Teams } from "../../../features/teams/components/Teams";

//features/reservations
import { Reservations } from "../../../features/reservations/components/Reservations";

// features/tournaments
import { TournamentModal } from "../../../features/tournaments/components/TournamentModal";
import { Tournaments } from "../../../features/tournaments/components/Tournaments";

// features/userAdmin
import { Fields as AdminFields } from "../../../features/userAdmin/components/Fields";
import { Reservations as AdminReservations } from "../../../features/userAdmin/components/Reservations";
import { Teams as AdminTeams } from "../../../features/userAdmin/components/Teams";
import { Tournaments as AdminTournaments } from "../../../features/userAdmin/components/Tournamenst";

// features/UserManagement
import { Settings as UserManagementSettings } from "../../../features/userManagement/components/Settings";

// features/users
import { CreateUserModal } from "../../../features/users/components/CreateUserModal";
import { Settings } from "../../../features/users/components/Settings";
import { UserComboBox } from "../../../features/users/components/UserComboBox";
import { UserDetailModal } from "../../../features/users/components/UserDetailModal";
import { Users } from "../../../features/users/components/Users";

export const DashboardContainer = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar /> 

      <div className="flex flex-1">
        <Sidebar />
        
        {/* Este Outlet renderiza las rutas internas */}
        <main className="flex-1 p-6">
          <Outlet /> {/* Aquí se inyectarán las rutas internas */}
        </main>
      </div>
    </div>
  );
};