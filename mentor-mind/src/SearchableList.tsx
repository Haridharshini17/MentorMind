import React, { useState } from 'react';

// Define interface for list items
interface Item {
  id: number;
  name: string;
  category: string;
}

const initialItems: Item[] = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Banana', category: 'Fruits' },
  { id: 3, name: 'Carrot', category: 'Vegetables' },
  { id: 4, name: 'Tomato', category: 'Vegetables' },
  { id: 5, name: 'Orange', category: 'Fruits' },
];

const SearchableList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Handle sort order change
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Handle category filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory(e.target.value);
  };

  // Filter and sort items based on search term and selected category
  const filteredItems = initialItems
    .filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm);
      const matchesCategory =
        filterCategory === 'All' || item.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });

  return (
    <div className="searchable-list">
      <h2>Searchable List</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {/* Filter Dropdown */}
      <select value={filterCategory} onChange={handleFilterChange}>
        <option value="All">All Categories</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      {/* Sort Button */}
      <button onClick={toggleSortOrder} className="sort-btn">
        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
      </button>

      {/* Conditional rendering for empty state */}
      {filteredItems.length === 0 ? (
        <p>No items found!</p>
      ) : (
        <ul className="item-list">
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} <span className="category">({item.category})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableList;
