import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        // Création de l'objet FormData
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData);

            // Vérification de la réponse et stockage du token
            if (response.status === 200) {
                const data = response.data;
                console.log('Authentification réussie:', data);

                // Stocker le token dans le localStorage
                localStorage.setItem('authToken', data.token); /// Assurez-vous que 'token' est la clé correcte
             navigate("/booksave")
            // Gérer la redirection ou l'état après l'authentification réussie
            // Par exemple, vous pouvez rediriger l'utilisateur vers une autre page

        }
        }
         catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };


    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Se connecter</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                    Mot de passe
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className={`w-full p-2 text-white font-bold rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                {loading ? 'Chargement...' : 'Se connecter'}
            </button>
        </form>
    </div>
</div>
  )
}

export default Login
