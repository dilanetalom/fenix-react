import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const saveBook = async (formData: FormData, token: string | null) => {
    console.log(formData);
    
    try {
        const response = await axios.post(`${API_URL}/savebook`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`, // Ajouter le token dans les headers
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Erreur lors de l\'enregistrement du livre.');
    }
};



export const getAllBooks = async () => {
    // const token = localStorage.getItem('authToken'); 
    try {
        const response = await axios.get(`${API_URL}/getbook`);
        console.log(response.data);
        
        return response.data; // Retourner les données des livres
    } catch (error) {
        console.error('Erreur lors de la récupération des livres:', );
        throw new Error('Erreur lors de la récupération des livres.');
    }
}


export const getBookById = async (id: string) => {
    const token = localStorage.getItem('authToken'); // Récupérer le token

    try {
        const response = await axios.get(`${API_URL}/getbybook/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Ajouter le token dans les en-têtes
            },
        });
        return response.data; // Retourner les données du livre
    } catch (error) {
        throw new Error('Erreur lors de la récupération du livre.');
    }
}



export const updateBooks = async (id: string, formData: FormData) => {
    const token = localStorage.getItem('authToken'); // Récupérer le token
    console.log(formData.append);
    

    if (!token) {
        throw new Error('L\'authentification est requise.'); // Vérifier si le token existe
    }

    try {
        const response = await axios.put(`${API_URL}/updatebook/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`, // Ajouter le token dans les headers
            },
        });
        return response.data; // Retourner les données de la réponse
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            // Gérer les erreurs spécifiques d'Axios
            throw new Error(`Erreur lors de l'enregistrement du livre : ${error.response.data.message || error.message}`);
        } else {
            // Gestion des autres types d'erreurs
            throw new Error('Erreur inconnue lors de l\'enregistrement du livre.');
        }
    }
};