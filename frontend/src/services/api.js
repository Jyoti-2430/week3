import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${API_URL}/songs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
        throw error;
    }
};

export const fetchSongById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/songs/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching song with id ${id}:`, error);
        throw error;
    }
};

export const createSong = async (songData) => {
    try {
        const response = await axios.post(`${API_URL}/songs`, songData);
        return response.data;
    } catch (error) {
        console.error('Error creating song:', error);
        throw error;
    }
};

export const updateSong = async (id, songData) => {
    try {
        const response = await axios.put(`${API_URL}/songs/${id}`, songData);
        return response.data;
    } catch (error) {
        console.error(`Error updating song with id ${id}:`, error);
        throw error;
    }
};

export const deleteSong = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/songs/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting song with id ${id}:`, error);
        throw error;
    }
};