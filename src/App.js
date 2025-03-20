// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx"; // Añade .jsx
import Dashboard from "./components/Dashboard.jsx"; // Añade .jsx
import ChatIA from "./pages/ChatIA.jsx"; // Añade .jsx
import Facturacion from "./pages/Facturacion.jsx"; // Añade .jsx
import RegistroDeFacturasEmitidas from "./pages/RegistroDeFacturasEmitidas.jsx"; // Añade .jsx
import ControlDeIncidencias from "./pages/ControlDeIncidencias.jsx"; // Añade .jsx
import Clientes from "./pages/Clientes.jsx"; // Añade .jsx
import OrdenDeRecogida from "./pages/OrdenDeRecogida.jsx"; // Añade .jsx
import EncargosDeSiembra from "./pages/EncargosDeSiembra.jsx"; // Añade .jsx
import Partidas from "./pages/Partidas.jsx"; // Añade .jsx
import ResumenPartidas from "./pages/ResumenPartidas.jsx"; // Añade .jsx
import PartidasCliente from "./pages/PartidasCliente.jsx"; // Añade .jsx
import AlmacenesDeVenta from "./pages/AlmacenesDeVenta.jsx"; // Añade .jsx
import HistorialDeSucesos from "./pages/HistorialDeSucesos.jsx"; // Añade .jsx
import Telefonos from "./pages/Telefonos.jsx"; // Añade .jsx
import Articulos from "./pages/Articulos.jsx"; // Añade .jsx
import OrdenAvisos from "./pages/OrdenAvisos.jsx"; // Añade .jsx
import MensajeriaInterna from "./pages/MensajeriaInterna.jsx"; // Añade .jsx
import PrivateRoute from "./components/PrivateRoute.jsx"; // Añade .jsx

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta pública (Login) */}
        <Route path="/" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat-ia"
          element={
            <PrivateRoute>
              <ChatIA />
            </PrivateRoute>
          }
        />
        <Route
          path="/facturacion"
          element={
            <PrivateRoute>
              <Facturacion />
            </PrivateRoute>
          }
        />
        <Route
          path="/registro-de-facturas-emitidas"
          element={
            <PrivateRoute>
              <RegistroDeFacturasEmitidas />
            </PrivateRoute>
          }
        />
        <Route
          path="/control-de-incidencias"
          element={
            <PrivateRoute>
              <ControlDeIncidencias />
            </PrivateRoute>
          }
        />
        <Route
          path="/clientes"
          element={
            <PrivateRoute>
              <Clientes />
            </PrivateRoute>
          }
        />
        <Route
          path="/orden-de-recogida"
          element={
            <PrivateRoute>
              <OrdenDeRecogida />
            </PrivateRoute>
          }
        />
        <Route
          path="/encargos-de-siembra"
          element={
            <PrivateRoute>
              <EncargosDeSiembra />
            </PrivateRoute>
          }
        />
        <Route
          path="/partidas"
          element={
            <PrivateRoute>
              <Partidas />
            </PrivateRoute>
          }
        />
        <Route
          path="/resumen-partidas"
          element={
            <PrivateRoute>
              <ResumenPartidas />
            </PrivateRoute>
          }
        />
        <Route
          path="/partidas-cliente"
          element={
            <PrivateRoute>
              <PartidasCliente />
            </PrivateRoute>
          }
        />
        <Route
          path="/almacenes-de-venta"
          element={
            <PrivateRoute>
              <AlmacenesDeVenta />
            </PrivateRoute>
          }
        />
        <Route
          path="/historial-de-sucesos"
          element={
            <PrivateRoute>
              <HistorialDeSucesos />
            </PrivateRoute>
          }
        />
        <Route
          path="/telefonos"
          element={
            <PrivateRoute>
              <Telefonos />
            </PrivateRoute>
          }
        />
        <Route
          path="/articulos"
          element={
            <PrivateRoute>
              <Articulos />
            </PrivateRoute>
          }
        />
        <Route
          path="/orden-avisos"
          element={
            <PrivateRoute>
              <OrdenAvisos />
            </PrivateRoute>
          }
        />
        <Route
          path="/mensajeria-interna"
          element={
            <PrivateRoute>
              <MensajeriaInterna />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;