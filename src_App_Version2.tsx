import React, { useState } from "react";
import AviatorGameScreen from "./components/AviatorGameScreen";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState<{ id: string; username: string; balance: number } | null>(null);

  return (
    <div>
      <h1>Aviator Betting Game</h1>
      {!user ? (
        <LoginForm onLogin={setUser} />
      ) : (
        <div>
          <div>
            Logged in as <strong>{user.username}</strong> | Balance: <strong>{user.balance}</strong>
          </div>
          <AviatorGameScreen user={user} />
        </div>
      )}
    </div>
  );
}

export default App;