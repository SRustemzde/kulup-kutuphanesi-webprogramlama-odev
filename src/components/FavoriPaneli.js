import React from 'react';
import KitapKarti from './KitapKarti';

function FavoriPaneli({ favoriKitaplar, favoriDegistir }) {
  return (
    <div className="favori-paneli">
      <h2>Favori Kitaplar ({favoriKitaplar.length})</h2>
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori kitabınız yok.</p>
      ) : (
        <div className="favori-liste">
          {favoriKitaplar.map(kitap => (
            <KitapKarti
              key={kitap.id}
              id={kitap.id}
              baslik={kitap.baslik}
              yazar={kitap.yazar}
              kategori={kitap.kategori}
              favorideMi={true}
              favoriDegistir={favoriDegistir}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriPaneli;