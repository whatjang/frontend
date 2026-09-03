import { create } from "zustand";

interface AuthState {
  memberId: number | null;
  accessToken: string | null;
  isInitialized: boolean;

  setAuth: (memberId: number, accessToken: string) => void;
  setAccessToken: (accessToken: string) => void;
  clearAuth: () => void;
  setInitialized: (isInitialized: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  memberId: null,
  accessToken: null,
  isInitialized: false,

  setAuth: (memberId, accessToken) =>
    set({
      memberId,
      accessToken,
      isInitialized: true,
    }),

  setAccessToken: (accessToken) =>
    set({
      accessToken,
    }),

  clearAuth: () =>
    set({
      memberId: null,
      accessToken: null,
    }),

  setInitialized: (isInitialized) =>
    set({
      isInitialized,
    }),
}));
