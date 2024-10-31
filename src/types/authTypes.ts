export interface SignUpRequest {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  password?: string;
}