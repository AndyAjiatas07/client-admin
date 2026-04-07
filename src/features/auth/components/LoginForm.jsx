// src/components/LoginForm.jsx
const LoginForm = ({ onForgotPassword, onSwitchToRegister }) => {
    return (
        <>
            <form className="space-y-5">
                {/* Email/usuario */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-800 mb-1.5"
                    >
                        Email o usuario
                    </label>
                    <input
                        id="email"
                        type="text"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Contraseña */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-800 mb-1.5"
                    >
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Botón login */}
                <button
                    type="submit"
                    className="w-full bg-main-blue hover:opacity-95 text-white font-medium py-2.5 px-4 rounded-lg text-sm"
                >
                    Iniciar sesión
                </button>
            </form>

            <p className="text-center text-sm mt-4 flex flex-col gap-2">
                <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-main-blue hover:underline"
                >
                    ¿Olvidaste tu contraseña?
                </button>

                <span>
                    ¿No tienes cuenta?{" "}
                    <button
                        type="button"
                        onClick={onSwitchToRegister}
                        className="text-main-blue hover:underline"
                    >
                        Regístrate
                    </button>
                </span>
            </p>
        </>
    );
};

export default LoginForm;