import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VehicleForm from "./components/VehicleForm";
import VehicleList from "./components/VehicleList";

interface Vehicle {
  plate: string;
  type: string;
  brand: string;
  model: string;
  color: string;
  parkingSpot: string;
  status: string;
  user: string;
  novelty: string;
  payment: string;
}

function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const addVehicle = (vehicle: Vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-white p-4">Parqueadero Autos Colombia</header>

        <nav className="bg-white p-4 shadow">
          <Link to="/" className="mr-4">Inicio</Link>
          <Link to="/register">Registrar Vehículo</Link>
        </nav>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<VehicleList vehicles={vehicles} />} />
            <Route path="/register" element={<VehicleForm addVehicle={addVehicle} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
