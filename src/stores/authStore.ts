import { create } from "zustand";

interface AuthState {
  member_id: number | null;
  access_token: string | null;
  isInitialized: boolean;

  setAuth: (member_id: number, access_token: string) => void;
  setAccessToken: (access_token: string) => void;
  clearAuth: () => void;
  setInitialized: (isInitialized: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  member_id: null,
  access_token: null,
  isInitialized: false,

  setAuth: (member_id, access_token) =>
    set({
      member_id,
      access_token,
    }),

  setAccessToken: (access_token) =>
    set({
      access_token,
    }),

  clearAuth: () =>
    set({
      member_id: null,
      access_token: null,
    }),

  setInitialized: (isInitialized) =>
    set({
      isInitialized,
    }),
}));
