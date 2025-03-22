import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Versión estática para GitHub Pages
// Esta implementación simula API calls para un sitio estático

/**
 * Cliente de consulta modificado para sitios estáticos (GitHub Pages)
 * Esta versión no intenta realizar peticiones a un backend
 */

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<any> {
  console.log(`[Sitio Estático] Simulando petición ${method} a ${url}`, data);
  
  // Para sitios estáticos, solo devolvemos una respuesta simulada
  return {
    ok: true,
    json: () => Promise.resolve({ success: true, message: "Operación simulada en sitio estático" }),
    text: () => Promise.resolve("Operación simulada en sitio estático"),
    status: 200,
    statusText: "OK (Simulado)",
  };
}

// Mock queryFn para sitios estáticos
export const getStaticQueryFn: <T>(options: any) => QueryFunction<T> =
  () =>
  async ({ queryKey }) => {
    console.log(`[Sitio Estático] Simulando consulta para ${queryKey[0]}`);
    
    // Para sitios estáticos, devolvemos datos simulados
    return { 
      success: true, 
      message: "Datos simulados para sitio estático",
      data: [] 
    } as any;
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Usamos el queryFn estático que no realiza peticiones reales
      queryFn: getStaticQueryFn({}),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
