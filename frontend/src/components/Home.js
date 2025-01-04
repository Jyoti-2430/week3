import React, { useState, useEffect } from 'react';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState('');

  const handleSearchClick = () => {
    if (keyword) {
      fetchMusicData(keyword, token);
    } else {
      alert('Please enter a keyword to search.');
    }
  };

  const fetchMusicData = async (keyword, token) => {
    try {
      setIsLoading(true);
      setError('');
      const response = await fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=track`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch music data: ${response.statusText}`);
      }

      const data = await response.json();
      setTracks(data.tracks.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'grant_type=client_credentials&client_id=bc43c5eebc5747859cabaa24d54d396b&client_secret=40436dc0c0e24164a55b755a4b0a182b',
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch token: ${response.statusText}`);
        }

        const jsonData = await response.json();
        setToken(jsonData.access_token);
      } catch (error) {
        console.error('Error fetching token:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchToken();
  }, []);

  return (
    <div>
      <h1>Spotify Music Search</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword"
      />
      <button onClick={handleSearchClick}>Search</button>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {tracks.map((track) => (
          <div key={track.id}>
            <img src={track.album.images[0].url} alt={track.name} width="50" />
            <p>{track.name}</p>
            <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
