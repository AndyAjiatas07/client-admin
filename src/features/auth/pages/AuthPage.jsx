

// src/pages/AuthPage.jsx
import { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm.jsx";

const AuthPage = () => {
    const [view, setView] = useState("login"); // "login", "register", "forgot"

    return (
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">

            {/* Logo */}
            <div className="flex justify-center mb-6">
                <img
                    src="/src/assets/img/kinal_sports.png"
                    alt="Kinal Sport"
                    className="h-20 w-auto"
                />
            </div>

            {/* Título y descripción */}
            <div className="text-center mb-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {view === "login"
                        ? "Bienvenido de nuevo"
                        : view === "register"
                        ? "Crear una cuenta"
                        : "Recuperar contraseña"}
                </h1>

                <p className="text-gray-600 text-base max-w-md mx-auto">
                    {view === "login"
                        ? "Ingresa a tu cuenta de administrador de Kinal Sport"
                        : view === "register"
                        ? "Regístrate como administrador de Kinal Sport"
                        : "Te enviaremos un correo para recuperar tu contraseña"}
                </p>
            </div>

            {/* Formularios */}

            {/* LOGIN */}
            {view === "login" && (
                <LoginForm
                    onSwitchToRegister={() => setView("register")}
                    onForgotPassword={() => setView("forgot")}
                />
            )}

            {/* REGISTER */}
            {view === "register" && (
                <form className="space-y-5">
                    <div>
                        <label
                            htmlFor="register-email"
                            className="block text-sm font-medium text-gray-800 mb-1.5"
                        >
                            Email
                        </label>
                        <input
                            id="register-email"
                            type="email"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="register-password"
                            className="block text-sm font-medium text-gray-800 mb-1.5"
                        >
                            Contraseña
                        </label>
                        <input
                            id="register-password"
                            type="password"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-main-blue hover:opacity-95 text-white font-medium py-2.5 px-4 rounded-lg text-sm"
                    >
                        Crear cuenta
                    </button>

                    <button
                        type="button"
                        onClick={() => setView("login")}
                        className="w-full mt-2 text-main-blue hover:underline text-sm"
                    >
                        Volver al login
                    </button>
                </form>
            )}

            {/* FORGOT PASSWORD */}
            {view === "forgot" && (
                <ForgotPasswordForm
                    onSwitch={() => setView("login")}
                />
            )}

        </div>
    );
};

export default AuthPage;
