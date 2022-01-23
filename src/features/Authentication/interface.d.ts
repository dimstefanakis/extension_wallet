export interface AuthenticationState {
  isLoggedIn: boolean;
  registerType: "email" | "phone";
  registerValue: string;
  loading: boolean;
}
