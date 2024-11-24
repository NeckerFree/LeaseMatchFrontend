import React, { useEffect, useState } from 'react';

interface Character
{
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

const PropertiesSearch: React.FC = () =>
{
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() =>
    {
        const fetchCharacters = async () =>
        {
            try
            {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                if (!response.ok)
                {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCharacters(data.results);
            } catch (err)
            {
                if (err instanceof Error)
                {
                    setError(err.message);
                } else
                {
                    setError('An unknown error occurred.');
                }
            } finally
            {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading)
    {
        return <div>Loading characters...</div>;
    }

    if (error)
    {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Properties Search (Rick and Morty Characters)</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {characters.map((character) => (
                    <div
                        key={character.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '1rem',
                            width: '200px',
                            textAlign: 'center',
                            background: '#f9f9f9',
                        }}
                    >
                        <img
                            src={character.image}
                            alt={character.name}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h2 style={{ fontSize: '1.2rem' }}>{character.name}</h2>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertiesSearch;
