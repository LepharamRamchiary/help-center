import React, { useState } from 'react';
import axios from 'axios';

const CreateCard = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/v1/cards', {
                title,
                description
            });
            setTitle('');
            setDescription('');
            alert('Card created successfully!');
        } catch (error) {
            console.error('Error creating card:', error);
            alert('Failed to create card.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Create a New Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create Card
                </button>
            </form>
        </div>
    );
};

export default CreateCard;
