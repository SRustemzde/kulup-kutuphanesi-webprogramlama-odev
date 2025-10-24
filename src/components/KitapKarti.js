import React from 'react';

function KitapKarti({ id, baslik, yazar, kategori, favorideMi, favoriDegistir }) {
  return (
    <div className={`kitap-karti ${favorideMi ? 'favori' : ''}`}>
      <div className="kitap-bilgileri">
        <h3 className="kitap-baslik">{baslik}</h3>
        <p className="kitap-yazar">Yazar: {yazar}</p>
        <p className="kitap-kategori">Kategori: {kategori}</p>
      </div>
      <div className="kitap-aksiyonlar">
        <button
          onClick={() => favoriDegistir(id)}
          className={`favori-buton ${favorideMi ? 'aktif' : ''}`}
        >
          {favorideMi ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
        </button>
      </div>
    </div>
  );
}

export default KitapKarti;