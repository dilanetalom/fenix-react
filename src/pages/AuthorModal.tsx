import axios from 'axios';
import React, { useState } from 'react';

interface AuthorModalProps {
    isOpen: boolean; // Type pour le prop isOpen
    onClose: () => void; // Type pour le prop onClose
}

const AuthorModal: React.FC<AuthorModalProps> = ({ isOpen, onClose }) => {
    const [author, setAuthor] = useState({
        name: '',
        gender: '',
        country: '',
        imageauthor: null as File | null, // Changement de type pour l'image
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAuthor((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setAuthor((prev) => ({ ...prev, imageauthor: file }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', author.name);
        formData.append('gender', author.gender);
        formData.append('country', author.country);
        if (author.imageauthor) {
            formData.append('imageauthor', author.imageauthor);
        }
    
        const token = localStorage.getItem('authToken');

        
        if (!token) {
            console.error('Token d\'authentification manquant');
            return;
        }
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/saveauthor', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log('Auteur enregistré avec succès!', response.data);
            onClose(); // Fermer le modal après la soumission
        } catch (error) {
            console.error('Erreur lors de la soumission:', error);
            if (error) {
                console.error('Détails de l\'erreur:', );
            }
        }
    };

    

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                <h2 className="text-2xl font-bold mb-4">Ajouter un Auteur</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={author.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="gender">Genre</label>
                        <select
                            id="gender"
                            name="gender"
                            value={author.gender}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg w-full p-2"
                            required
                        >
                            <option value="">Sélectionnez un genre</option>
                            <option value="Masculin">Masculin</option>
                            <option value="Féminin">Féminin</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="country">Pays</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={author.country}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="imageauthor">Image de l'Auteur</label>
                        <input
                            type="file"
                            id="imageauthor"
                            name="imageauthor"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border border-gray-300 rounded-lg w-full p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthorModal;