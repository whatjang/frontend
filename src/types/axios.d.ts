import "axios";

declare module "axios" {
  interface AxiosRequestConfig {
    useAuth?: boolean;
    skipRefresh?: boolean;
    _retry?: boolean;
  }
}
