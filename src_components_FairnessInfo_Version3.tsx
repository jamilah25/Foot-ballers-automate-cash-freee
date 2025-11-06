import React, { useEffect, useState } from "react";

const FairnessInfo: React.FC = () => {
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    fetch('/aviator/fair')
      .then(res => res.json())
      .then(setInfo);
  }, []);

  if (!info) return <div>Loading fairness data...</div>;

  return (
    <div>
      <h3>Provably Fair Data</h3>
      <div>Server Seed: {info.publicServerSeed}</div>
      <div>Client Seed: {info.clientSeed}</div>
      <div>Nonce: {info.nonce}</div>
      <div>Round Hash (SHA256): {info.roundHash}</div>
      <small>
        You can verify the round’s crash with these values and the open-source algorithm.
      </small>
    </div>
  );
};

export default FairnessInfo;