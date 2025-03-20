import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Home,
  MessageCircle,
  Phone,
  FileIcon as FileInvoice,
  FileTextIcon as FileText2,
  ChevronRight,
  AlertCircle,
  Truck,
  Package,
  ClipboardList,
  UserCheck,
  Store,
  History,
  ShoppingBag,
  Bell,
  Users,
  Bot,
} from "lucide-react";
import Seedling from "./icons/Seedling";
import CardsMain from "./CardsMain"; // Importa CardsMain
import ChatGlobal from "./ChatGlobal"; // Importa ChatGlobal
import "../global.css";

const Dashboard = ({ children, activePage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Botón flotante para móviles */}
      {isMobile && !sidebarOpen && (
        <button className="mobile-menu-trigger" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <button className="menu-button" onClick={toggleSidebar}>
            <Menu size={20} />
            {sidebarOpen && <span>Menu</span>}
            <ChevronRight className={`arrow ${sidebarOpen ? "" : "rotated"}`} size={16} />
          </button>
        </div>

        <div className="sidebar-section">
          <div className="section-title">{sidebarOpen && "PERSONAL"}</div>
          <ul className="nav-links">
            <Link to="/dashboard">
              <li className={`nav-link ${activePage === "Dashboard" ? "active" : ""}`}>
                <Home size={20} />
                {sidebarOpen && <span>Dashboard</span>}
                {sidebarOpen && <div className="badge">4</div>}
              </li>
            </Link>
            <Link to="/chat-ia">
              <li className={`nav-link ${activePage === "ChatIA" ? "active" : ""}`}>
                <Bot size={20} />
                {sidebarOpen && <span>Chat IA</span>}
                {sidebarOpen && <ChevronRight size={16} />}
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="section-title">{sidebarOpen && "APPS"}</div>
          <ul className="nav-links">
            <Link to="/facturacion">
              <li className={`nav-link ${activePage === "Facturacion" ? "active" : ""}`}>
                <FileInvoice size={20} />
                {sidebarOpen && <span>Facturación</span>}
              </li>
            </Link>
            <Link to="/registro-de-facturas-emitidas">
              <li className={`nav-link ${activePage === "RegistroDeFacturasEmitidas" ? "active" : ""}`}>
                <FileText2 size={20} />
                {sidebarOpen && <span>Registro de facturas emitidas</span>}
              </li>
            </Link>
            <Link to="/control-de-incidencias">
              <li className={`nav-link ${activePage === "ControlDeIncidencias" ? "active" : ""}`}>
                <AlertCircle size={20} />
                {sidebarOpen && <span>Control de incidencias</span>}
              </li>
            </Link>
            <Link to="/clientes">
              <li className={`nav-link ${activePage === "Clientes" ? "active" : ""}`}>
                <Users size={20} />
                {sidebarOpen && <span>Clientes</span>}
              </li>
            </Link>
            <Link to="/orden-de-recogida">
              <li className={`nav-link ${activePage === "OrdenDeRecogida" ? "active" : ""}`}>
                <Truck size={20} />
                {sidebarOpen && <span>Orden de recogida</span>}
              </li>
            </Link>
            <Link to="/encargos-de-siembra">
              <li className={`nav-link ${activePage === "EncargosDeSiembra" ? "active" : ""}`}>
                <Seedling size={20} />
                {sidebarOpen && <span>Encargos de siembra</span>}
              </li>
            </Link>
            <Link to="/partidas">
              <li className={`nav-link ${activePage === "Partidas" ? "active" : ""}`}>
                <Package size={20} />
                {sidebarOpen && <span>Partidas</span>}
              </li>
            </Link>
            <Link to="/resumen-partidas">
              <li className={`nav-link ${activePage === "ResumenPartidas" ? "active" : ""}`}>
                <ClipboardList size={20} />
                {sidebarOpen && <span>Resumen partidas</span>}
              </li>
            </Link>
            <Link to="/partidas-cliente">
              <li className={`nav-link ${activePage === "PartidasCliente" ? "active" : ""}`}>
                <UserCheck size={20} />
                {sidebarOpen && <span>Partidas cliente</span>}
              </li>
            </Link>
            <Link to="/almacenes-de-venta">
              <li className={`nav-link ${activePage === "AlmacenesDeVenta" ? "active" : ""}`}>
                <Store size={20} />
                {sidebarOpen && <span>Almacenes de venta</span>}
              </li>
            </Link>
            <Link to="/historial-de-sucesos">
              <li className={`nav-link ${activePage === "HistorialDeSucesos" ? "active" : ""}`}>
                <History size={20} />
                {sidebarOpen && <span>Historial de sucesos</span>}
              </li>
            </Link>
            <Link to="/telefonos">
              <li className={`nav-link ${activePage === "Telefonos" ? "active" : ""}`}>
                <Phone size={20} />
                {sidebarOpen && <span>Telefonos</span>}
              </li>
            </Link>
            <Link to="/articulos">
              <li className={`nav-link ${activePage === "Articulos" ? "active" : ""}`}>
                <ShoppingBag size={20} />
                {sidebarOpen && <span>Artículos</span>}
              </li>
            </Link>
            <Link to="/orden-avisos">
              <li className={`nav-link ${activePage === "OrdenAvisos" ? "active" : ""}`}>
                <Bell size={20} />
                {sidebarOpen && <span>Orden avisos</span>}
              </li>
            </Link>
            <Link to="/mensajeria-interna">
              <li className={`nav-link ${activePage === "MensajeriaInterna" ? "active" : ""}`}>
                <MessageCircle size={20} />
                {sidebarOpen && <span>Mensajería interna</span>}
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? "" : "expanded"}`}>
        {/* Mostrar CardsMain y ChatGlobal solo si no hay children */}
        {!children && (
          <>
            <h1 className="page-title">Dashboard</h1>
            <CardsMain />
            <div className="chat-wrapper">
              <ChatGlobal />
            </div>
          </>
        )}

        {/* Mostrar children si está presente */}
        {children}
      </div>

      {/* Overlay para dispositivos móviles */}
      {isMobile && sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Dashboard;