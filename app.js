const legCounts = {
    inek: 4,
    tavuk: 2,
    domuz: 4,
    koyun: 4
};

const hayvanlar = ["inek", "tavuk", "domuz", "koyun"];

let toplamAyakSayisi = 0;

for (let i = 0; i < hayvanlar.length; i++) {
const hayvanTuru = hayvanlar[i];

if (hayvanTuru !== "domuz") { // Sadece domuzlari atlanacak
const ayakSayisi = legCounts[hayvanTuru];
toplamAyakSayisi += ayakSayisi;
}
}

console.log(`Domuz Hariç, Diger hayvanların ayak sayısı toplamı: + ${toplamAyakSayisi}`);

// Yaptık ama yıne tam anlamadık
// özellıkle i döngülerini length leri i++ ları oturtamadım