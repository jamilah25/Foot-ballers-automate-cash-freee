import { generateServerSeed, getCrashPoint } from "./Fairness";

export class AviatorGame {
  serverSeed: string;
  clientSeed: string;
  nonce: number;
  crashPoint: number | null = null;
  isRunning: boolean = false;

  constructor(clientSeed = "defaultclient") {
    this.serverSeed = generateServerSeed();
    this.clientSeed = clientSeed;
    this.nonce = 0;
  }

  startGame() {
    this.nonce += 1;
    this.crashPoint = getCrashPoint(this.serverSeed, this.clientSeed, this.nonce);
    this.isRunning = true;
  }

  stopGame() {
    this.isRunning = false;
    this.crashPoint = null;
    this.serverSeed = generateServerSeed();
  }

  getCurrentCrashPoint(): number | null {
    return this.crashPoint;
  }

  getServerSeed(): string {
    return this.serverSeed;
  }

  getClientSeed(): string {
    return this.clientSeed;
  }

  getNonce(): number {
    return this.nonce;
  }
}