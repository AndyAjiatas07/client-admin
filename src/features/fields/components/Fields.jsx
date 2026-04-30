import { useState, useEffect } from "react";
import { useFieldsStore } from "../../users/store/adminStore";
import { useUIStore } from "../../auth/store/uiStore";
import { Spinner } from "@material-tailwind/react";
import { FieldModal } from "./FieldModal.jsx";

export const Fields = () => {
    const { fields, loading, error, getFields } = useFieldsStore();
    const { openConfirm } = useUIStore();

    const [openModal, setOpenModal] = useState(false);
    const [selectedField, setSelectedField] = useState(null);

    useEffect(() => {
        getFields();
    }, [getFields]);

    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-main-blue">
                        Gestión de Canchas
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Administra las canchas registradas
                    </p>
                </div>

                <button
                    onClick={() => {
                        setSelectedField(null);
                        setOpenModal(true);
                    }}
                    className="bg-main-blue px-4 py-2 rounded text-white hover:opacity-90 transition"
                >
                    + Agregar Campo
                </button>
            </div>

            {/* MODAL */}
            <FieldModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                field={selectedField}
            />

            {/* LOADING */}
            {loading && (
                <div className="flex justify-center py-10">
                    <Spinner className="h-8 w-8" />
                </div>
            )}

            {/* GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {fields?.map((field) => (
                    <div
                        key={field._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-[1.02]"
                    >
                        {/* IMAGEN */}
                        <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
                            <img
                                src={field.photo || "https://placehold.co/300x200"}
                                alt={field.fieldName}
                                className="max-h-full max-w-full object-contain rounded-t-xl"
                            />
                        </div>

                        {/* CONTENIDO */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-main-blue">
                                {field.fieldName}
                            </h2>
                            <h3 className="text-sm text-gray-400 mt-2">
                                {field.description}
                            </h3>

                            {/* BADGES */}
                            <div className="flex gap-2 mt-2 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                    {field.fieldType}
                                </span>

                                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                    {field.pricePerHour}/hora
                                </span>

                                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                    {field.capacity}
                                </span>
                            </div>

                            {/* INFO */}
                            <p className="text-sm text-gray-400 mt-2">
                                ID: {field._id}
                            </p>

                            {/* BOTONES */}
                            <div className="flex gap-3 mt-5">
                                <button
                                    onClick={() => {
                                        setSelectedField(field);
                                        setOpenModal(true);
                                    }}
                                    className="flex-1 py-2 rounded-lg bg-main-blue text-white font-medium hover:opacity-90 transition"
                                >
                                    ✏️ Editar
                                </button>

                                <button
                                    onClick={() => openConfirm(() => console.log("Eliminar", field._id))}
                                    className="flex-1 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
                                >
                                    🗑️ Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ERROR */}
            {error && (
                <p className="text-red-500 mt-4 text-center">
                    {error}
                </p>
            )}
        </div>
    );
};