import React from 'react';
import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, favoriler, favoriDegistir }) {
  if (kitaplar.length === 0) {
    return (
      <div className="kitap-liste">
        <p>Arama kriterlerinize uygun kitap bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="kitap-liste">
      {kitaplar.map(kitap => (
        <KitapKarti
          key={kitap.id}
          id={kitap.id}
          baslik={kitap.baslik}
          yazar={kitap.yazar}
          kategori={kitap.kategori}
          favorideMi={favoriler.includes(kitap.id)}
          favoriDegistir={favoriDegistir}
        />
      ))}
    </div>
  );
}

export default KitapListe;