import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // 1️⃣ Borra cualquier sesión almacenada (opcional)
        localStorage.removeItem("userToken"); // Si usas autenticación con token
        
        // 2️⃣ Redirige al login
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Bienvenido a la Página de Inicio</h2>
                <button onClick={handleLogout} className="btn btn-danger">
                    Cerrar Sesión
                </button>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-sm p-3 mb-4">
                        <h4 className="text-primary">👋 Hola, usuario</h4>
                        <p>Has iniciado sesión correctamente. Disfruta de la plataforma.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm p-3 mb-4">
                        <h4 className="text-success">📌 Funcionalidades</h4>
                        <ul>
                            <li>Explora contenido exclusivo</li>
                            <li>Administra tu perfil</li>
                            <li>Accede a herramientas personalizadas</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm p-3">
                <h4 className="text-info">🚀 Últimas actualizaciones</h4>
                <p>Aquí puedes encontrar las novedades más recientes de la plataforma.</p>
            </div>
        </div>
    );
}

export default Home;
