import React, { useState } from 'react';
import { Socket } from 'socket.io-client';

interface Props {
  isRunning: boolean;
  socket: Socket;
}

const AviatorBetForm: React.FC<Props> = ({ isRunning, socket }) => {
  const [playerId, setPlayerId] = useState('');
  const [amount, setAmount] = useState(0);
  const [autoCashout, setAutoCashout] = useState(2.0);

  const handleBet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRunning) return alert("Game isn't running!");
    socket.emit('bet', { playerId, amount, autoCashout });
  };

  const handleManualCashout = () => {
    socket.emit('cashout', { playerId, atMultiplier: autoCashout });
  };

  return (
    <form onSubmit={handleBet}>
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
      <button type="button" onClick={handleManualCashout} disabled={!isRunning || !playerId}>Cash Out</button>
    </form>
  );
};

export default AviatorBetForm;