import React, { useState, useEffect } from 'react';
import AviatorBetForm from './AviatorBetForm';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

const AviatorGameScreen: React.FC = () => {
  const [crashPoint, setCrashPoint] = useState<number | null>(null);
  const [currentCrash, setCurrentCrash] = useState<number>(1.0);
  const [isRunning, setIsRunning] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket = io('ws://localhost:4000'); // Adjust if your backend uses a different host/port

    socket.on('connected', (data) => {
      setMessages(prev => [...prev, data.message]);
    });

    socket.on('roundStarted', (data) => {
      setCrashPoint(data.crashPoint);
      setCurrentCrash(1.0);
      setIsRunning(true);
      setMessages(prev => [...prev, `Round started! Crash at ${data.crashPoint}`]);
    });

    socket.on('crashUpdate', (data) => {
      setCurrentCrash(data.currentCrash);
    });

    socket.on('roundEnded', (data) => {
      setIsRunning(false);
      setMessages(prev => [...prev, `Crashed at ${data.crashPoint}`]);
    });

    socket.on('betPlaced', (data) => {
      setMessages(prev => [...prev, `Bet placed: ${JSON.stringify(data)}`]);
    });

    socket.on('cashedOut', (data) => {
      setMessages(prev => [...prev, `Cashed out: ${JSON.stringify(data)}`]);
    });

    return () => { socket.disconnect(); };
  }, []);

  const handleStart = () => {
    socket.emit('startRound');
  };

  return (
    <div>
      <div>
        <strong>Crash Point:</strong> {crashPoint ?? 'Waiting...'}
      </div>
      <div>
        <strong>Current Multiplier:</strong> {currentCrash.toFixed(2)}
      </div>
      <div>
        <strong>Status:</strong> {isRunning ? 'Running' : 'Waiting'}
      </div>
      <button onClick={handleStart} disabled={isRunning}>Start Game</button>
      <AviatorBetForm isRunning={isRunning} socket={socket} />
      <div>
        <h3>Game Events</h3>
        <ul>
          {messages.map((msg, idx) => <li key={idx}>{msg}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default AviatorGameScreen;