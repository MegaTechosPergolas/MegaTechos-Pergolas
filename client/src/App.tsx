import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Catalogo from "@/pages/Catalogo";
import { useCallback, useState, useEffect } from "react";

/**
 * Hook personalizado para usar ubicación basada en hash para GitHub Pages
 * Esta implementación es necesaria para que el sitio funcione correctamente como SPA en GitHub Pages
 */
const useHashLocation = (): [string, (to: string) => void] => {
  // Obtener la ubicación actual del hash (sin el #)
  const getHashLocation = () => {
    // Elimina el # del hash y asegura una / al inicio
    const path = window.location.hash.replace("#", "") || "/";
    return path.startsWith("/") ? path : `/${path}`;
  };

  // Estado actual de la ubicación basada en hash
  const [loc, setLoc] = useState(getHashLocation());

  // Manejar cambios en el hash
  useEffect(() => {
    // Actualizar la ubicación cuando cambia el hash
    const handler = () => {
      const hashLoc = getHashLocation();
      setLoc(hashLoc);
    };

    // Escuchar eventos de cambio de hash
    window.addEventListener("hashchange", handler);
    
    // Inicializar la ubicación al cargar
    handler();
    
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Función para navegar a una nueva ubicación
  const navigate = useCallback(
    (to: string) => {
      window.location.hash = to;
    },
    []
  );

  return [loc, navigate];
};

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/productos" component={Products} />
          <Route path="/servicios" component={Services} />
          <Route path="/catalogo" component={Catalogo} />
          <Route path="/contacto" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
