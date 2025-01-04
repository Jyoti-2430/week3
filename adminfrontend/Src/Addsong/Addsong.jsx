import React, { useState } from 'react';

const Addsong = ({ onAddSong }) => {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!songName || !artist || !album || !songUrl) {
      setError('All fields are required');
      return;
    }
    
    setError('');
    
    // Create the song object
    const newSong = {
      name: songName,
      artist: artist,
      album: album,
      songUrl: songUrl,
      imageUrl: imageUrl || 'https://example.com/default-image.jpg', // Fallback image if no image URL is provided
    };
    
    // Call the onAddSong function passed as a prop to add the song
    onAddSong(newSong);
    
    // Clear form fields
    setSongName('');
    setArtist('');
    setAlbum('');
    setSongUrl('');
    setImageUrl('');
  };

  return (
    <div className="add-song">
      <h2>Add a New Song</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Song Name:</label>
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Artist:</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Album:</label>
          <input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Song URL (Audio file or Streaming link):</label>
          <input
            type="url"
            value={songUrl}
            onChange={(e) => setSongUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL (Album artwork):</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default Addsong;
