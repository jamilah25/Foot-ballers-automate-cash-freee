// Demo user store; replace with persistent DB
import { User } from './User';

const users: User[] = [
  { id: 'u1', username: 'alice', password: 'password123', balance: 1000 },
  { id: 'u2', username: 'bob', password: 'secure456', balance: 1000 },
];

export function findUser(username: string): User | undefined {
  return users.find(u => u.username === username);
}

export function addBalance(userId: string, amount: number) {
  const user = users.find(u => u.id === userId);
  if (user) user.balance += amount;
}

export function deductBalance(userId: string, amount: number): boolean {
  const user = users.find(u => u.id === userId);
  if (!user || user.balance < amount) return false;
  user.balance -= amount;
  return true;
}