export interface AuthenticationState {
  isLoggedIn: boolean;
  account?: AccountInterface;
  registerType: "email" | "phone";
  registerValue: RegisterValue;
  loading: boolean;
}

export interface RegisterValue{
  email?: string;
  phone?: string;
}

export interface AccountInterface{
  email: string;
  full_name: string;
  account_id: string;
}