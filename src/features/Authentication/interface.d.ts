export interface AuthenticationState {
  isLoggedIn: boolean;
  registerType: "email" | "phone";
  registerValue: RegisterValue;
  loading: boolean;
}

export interface RegisterValue{
  email?: string;
  phone?: string;
}