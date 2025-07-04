export interface FormSubmission {
  id?: number;
  name: string;
  email: string;
  phone: string;
  created_at?: string;
}

export interface ApiResponse {
  message: string;
  id?: number;
}

export interface FormSubmitStatus {
  success: boolean;
  message: string;
}

export interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
}