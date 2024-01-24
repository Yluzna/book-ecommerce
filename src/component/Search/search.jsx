
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.tudominio.com/buscar?query=${query}`);
            const data = await response.json();

            // Llama a la función onSearch con los resultados de la API
            onSearch(data);
        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>
                <span role="img" aria-label="Search">🔍</span>
            </button>
        </div>
    );
};

export default SearchBar;