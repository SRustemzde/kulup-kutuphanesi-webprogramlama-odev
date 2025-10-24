import React from 'react';

function KategoriFiltre({ kategori, setKategori, kategoriler }) {
  return (
    <div className="kategori-filtre">
      <select
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        className="kategori-select"
      >
        {kategoriler.map((kat, index) => (
          <option key={index} value={kat}>
            {kat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KategoriFiltre;