import React from 'react';

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <div className="arama-cubugu">
      <input
        type="text"
        placeholder="Kitap başlığı ara..."
        value={aramaMetni}
        onChange={(e) => setAramaMetni(e.target.value)}
        className="arama-input"
      />
    </div>
  );
}

export default AramaCubugu;