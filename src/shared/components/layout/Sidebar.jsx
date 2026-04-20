import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
    const location = useLocation(); // Obtiene la ruta actual

    const items = [
        { label: "Canchas", path: "/dashboard/fields" },
        { label: "Reservaciones", path: "/dashboard/reservations" },
        { label: "Equipos", path: "/dashboard/teams" },
        { label: "Torneos", path: "/dashboard/tournaments" },
        { label: "Usuarios", path: "/dashboard/users" },
    ];

    return (
        <aside className="w-60 bg-white min-h-[calc(100vh-4rem)] p-4 shadow-sm">
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.label}>
                        <Link
                            to={item.path}
                            className={`block px-4 py-2 rounded-lg font-medium text-gray-700 
                              ${location.pathname === item.path ? 'bg-gray-200' : 'hover:bg-gray-100'} 
                              cursor-pointer transition-colors`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};