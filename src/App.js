import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import AddItem from './components/AddItem';
import ItemsDisplay from './components/ItemsDisplay';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name && !filters.brand && !filters.type) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== '' && item.name.indexOf(filters.name) >= 0) {
        filteredData.push(item);
        continue
      }
      if (filters.price !== 0 && item.price < filters.maxprice) {
        filteredData.push(item);
        continue
      }
      if (filters.type !== '' && item.type.indexOf(filters.type) >= 0) {
        filteredData.push(item);
        continue
      }
      if (filters.brand !== '' && item.brand.indexOf(filters.brand) >= 0) {
        filteredData.push(item);
        continue
      }

      //filteredData.push(item);
    }
    return filteredData;
  }

  return (
    <div className='container'>
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        {/* sending callback function to child component as prop */}
        {/* https://www.youtube.com/watch?v=lO6MunNmZWU&list=PLzMcBGfZo4-nRV61oEu3KfMwWKI571uPT&index=6 */}
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}


export default App;
