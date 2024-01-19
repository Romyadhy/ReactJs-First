export default function FooterCom({ items }){

    if(items.length === 0) return <footer className="stats">Daftar Belanjaan masih Kosong</footer>
  
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked === true).length;
    const persen = Math.round((checkedItems / totalItems) * 100);
    return (
      <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({persen}%)</footer>
    );
  }