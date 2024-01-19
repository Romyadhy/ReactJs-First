import { useState } from "react";
import Item from "./Items";
export default function Grosery({ items, onDeleteItem, onToggleItem, onClearItems }){
    const [sortBy, setSortBy] = useState('input');
  
    let sortByItems;
    
    
    switch (sortBy) {
      case 'name':
        sortByItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'checked':
        sortByItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;
  
      default:
        sortByItems = items;
        break;
    }
  
    return( 
      <>
      {/* List Item*/}
      <div className="list">
          <ul>
          {sortByItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}  />
          ))}
          </ul>
        </div>
        {/* Category Urutan */}
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    );
  }