import React, { useState } from 'react';

interface Props {
  isRunning: boolean;
}

const AviatorBetForm: React.FC<Props> = ({ isRunning }) => {
  const [playerId, setPlayerId] = useState('');
  const [amount, setAmount] = useState(0);
  const [autoCashout, setAutoCashout] = useState(2.0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRunning) return alert("Game isn't running!");
    const resp = await fetch('/aviator/bet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerId, amount, autoCashout }),
    });
    const data = await resp.json();
    alert(`Bet placed! ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player ID"
        value={playerId}
        onChange={e => setPlayerId(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        min={1}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Auto Cashout Multiplier"
        value={autoCashout}
        onChange={e => setAutoCashout(Number(e.target.value))}
        min={1.01}
        required
      />
      <button type="submit" disabled={!isRunning}>Place Bet</button>
    </form>
  );
};

export default AviatorBetForm;