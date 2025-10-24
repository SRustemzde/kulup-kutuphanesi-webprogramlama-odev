import React, { useState, useEffect } from 'react';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const kitaplar = [
  { id: 1, baslik: "Suç ve Ceza", yazar: "Dostoyevski", kategori: "Klasik" },
  { id: 2, baslik: "1984", yazar: "George Orwell", kategori: "Distopya" },
  { id: 3, baslik: "Simyacı", yazar: "Paulo Coelho", kategori: "Felsefe" },
  { id: 4, baslik: "Kar", yazar: "Orhan Pamuk", kategori: "Çağdaş" },
  { id: 5, baslik: "Cesur Yeni Dünya", yazar: "Aldous Huxley", kategori: "Distopya" },
  { id: 6, baslik: "Savaş ve Barış", yazar: "Tolstoy", kategori: "Klasik" },
  { id: 7, baslik: "Kürk Mantolu Madonna", yazar: "Sabahattin Ali", kategori: "Çağdaş" },
  { id: 8, baslik: "Düşünen Maymun", yazar: "Terry Pratchett", kategori: "Fantastik" },
  { id: 9, baslik: "Hobbit", yazar: "J.R.R. Tolkien", kategori: "Fantastik" },
  { id: 10, baslik: "Bilinmeyen Bir Kadının Mektubu", yazar: "Stefan Zweig", kategori: "Klasik" }
];

function App() {
  const [aramaMetni, setAramaMetni] = useState('');
  const [kategori, setKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const kaydedilmisArama = localStorage.getItem('aramaMetni');
    const kaydedilmisFavoriler = localStorage.getItem('favoriler');

    if (kaydedilmisArama) {
      setAramaMetni(kaydedilmisArama);
    }
    if (kaydedilmisFavoriler) {
      setFavoriler(JSON.parse(kaydedilmisFavoriler));
    }

    // Loading screen timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [favoriler]);

  const favoriDegistir = (kitapId) => {
    setFavoriler(oncekiFavoriler => {
      if (oncekiFavoriler.includes(kitapId)) {
        return oncekiFavoriler.filter(id => id !== kitapId);
      } else {
        return [...oncekiFavoriler, kitapId];
      }
    });
  };

  const filtrelenmisKitaplar = kitaplar.filter(kitap => {
    const aramaKosulu = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriKosulu = kategori === 'Tümü' || kitap.kategori === kategori;
    return aramaKosulu && kategoriKosulu;
  });

  const favoriKitaplar = kitaplar.filter(kitap => favoriler.includes(kitap.id));

  const kategoriler = ['Tümü', ...new Set(kitaplar.map(kitap => kitap.kategori))];

  return (
    <>
      <LoadingScreen isVisible={isLoading} />

      <div className={`App ${isLoading ? 'hidden' : 'visible'}`}>
        <header className="App-header">
          <h1>Kulüp Kütüphanesi</h1>
        </header>

        <div className="controls">
          <AramaCubugu
            aramaMetni={aramaMetni}
            setAramaMetni={setAramaMetni}
          />
          <KategoriFiltre
            kategori={kategori}
            setKategori={setKategori}
            kategoriler={kategoriler}
          />
        </div>

        <div className="content">
          <div className="kitap-section">
            <h2>Kitaplar ({filtrelenmisKitaplar.length})</h2>
            <KitapListe
              kitaplar={filtrelenmisKitaplar}
              favoriler={favoriler}
              favoriDegistir={favoriDegistir}
            />
          </div>

          <div className="favori-section">
            <FavoriPaneli
              favoriKitaplar={favoriKitaplar}
              favoriDegistir={favoriDegistir}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
