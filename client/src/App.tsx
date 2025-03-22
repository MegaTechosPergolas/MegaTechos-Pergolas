import { Switch, Route } from "wouter";
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

// Para GitHub Pages, usaremos un enfoque más simple con redirecciones
// y el enrutamiento estándar de wouter

// Agregamos un script para manejar rutas en GitHub Pages
// durante la inicialización de la aplicación
if (typeof window !== 'undefined') {
  // Inicializar rutas en GitHub Pages
  // Esto implementa una redirección manual basada en fragmentos (hash)
  const path = window.location.hash.replace('#', '');
  if (path.length > 0) {
    window.history.replaceState(null, '', path);
  }
}

function Router() {
  return (
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
