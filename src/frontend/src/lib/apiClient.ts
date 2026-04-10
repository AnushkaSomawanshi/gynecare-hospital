// Centralized API client for backend REST calls
import { getToken } from "@/lib/auth";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

async function request<T>(
  method: RequestMethod,
  path: string,
  body?: unknown,
  authenticated = false,
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (authenticated) {
    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data as T;
}

export const apiClient = {
  get: <T>(path: string, authenticated = false) =>
    request<T>("GET", path, undefined, authenticated),

  post: <T>(path: string, body: unknown, authenticated = false) =>
    request<T>("POST", path, body, authenticated),

  patch: <T>(path: string, body?: unknown, authenticated = false) =>
    request<T>("PATCH", path, body, authenticated),
};

export default apiClient;
