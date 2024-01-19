import { useState } from "react";
export default function FormInpt({onAddItem}){
    const [name, setName] = useState('');
    const [kuantiti, setKuantiti] = useState(1);
  
    function handleSubmit(e){
      e.preventDefault();
  
      if(!name) return
   
      const newItem = {name, kuantiti, checked:false, id:Date.now()}
      onAddItem(newItem);
  
      console.log(newItem);
  
      setName('');
      setKuantiti(1);
    }
  
    const quantityNum = [...Array(20)].map((_, i)=> (
      <option value={i + 1} key={i+1}>{i+1}</option>
    ));
    return (
      <form className="add-form" onSubmit={handleSubmit}>
          <h3>Hari ini belanja apa kita?</h3>
          <div>
            <select value={kuantiti} onChange={(e) => setKuantiti(Number(e.target.value))}>
              {quantityNum}
            </select>
            <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <button>Tambah</button>
        </form>
    );
  }