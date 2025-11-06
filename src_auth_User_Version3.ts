// User data model; in practice use a database
export interface User {
  id: string;
  username: string;
  password: string; // hash in production
  balance: number;
}