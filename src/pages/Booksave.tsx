import React, { useState } from 'react';
import { saveBook } from '../service/bookservice';
import AuthorModal from './AuthorModal';


// interface Author {
//     id: number; // ou string, selon le type de votre ID
//     name: string;
//     gender: string;
//     country: string;
//     imageauthor: string; // ou la propriété qui représente le nom de l'auteur
// }


function Booksave() {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [format, setFormat] = useState<string>('');
    const [niveau, setNiveau] = useState<string>('');
    const [pubDate, setPubDate] = useState<string>('');
    const [price_p, setPrice_p] = useState<number | string>('');
    const [price_n, setPrice_n] = useState<number | string>('');
    const [userId, setUserId] = useState<number | string>('');
    const [authorId, setAuthorId] = useState<number | string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('language', language);
        if (image) formData.append('image', image);
        formData.append('status', format);
        formData.append('niveau', niveau);
        formData.append('pub_date', pubDate);
        formData.append('price_p', String(price_p));
        formData.append('price_n', String(price_n));
        formData.append('user_id', String(userId));
        formData.append('author_id', String(authorId));

        try {
            const token = localStorage.getItem('authToken');
            await saveBook(formData, token);
            // Gérer la redirection ou l'affichage d'un message de succès
            console.log('Livre enregistré avec succès !');
        } catch (err) {
            setError('Erreur lors de l\'enregistrement du livre.');
        } finally {
            setLoading(false);
        }
    };



    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-2/3">
                <h2 className="text-2xl font-bold mb-6 text-center">Enregistrer un Livre   </h2>
                <a href="/allbook">voir tous les livres</a>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit} >
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="title">Titre</label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="category">Catégorie</label>
                            <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="language">Langue</label>
                            <input type="text" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="image">Image</label>
                            <input type="file" id="image" onChange={(e) => e.target.files && setImage(e.target.files[0])} className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="format">Format</label>
                            <input type="text" id="format" value={format} onChange={(e) => setFormat(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="niveau">Niveau</label>
                            <input type="text" id="niveau" value={niveau} onChange={(e) => setNiveau(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="pub_date">Date de publication</label>
                            <input type="date" id="pub_date" value={pubDate} onChange={(e) => setPubDate(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="price">Prix p</label>
                            <input type="number" id="price" value={price_p} onChange={(e) => setPrice_p(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="price">Prix n</label>
                            <input type="number" id="price" value={price_n} onChange={(e) => setPrice_n(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="user_id">ID Utilisateur</label>
                            <input type="number" id="user_id" value={userId} onChange={(e) => setUserId(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="user_id">Auteur</label>
                            <input type="number" id="user_id" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="author_id">ID Auteur</label>
                            <select
                                id="author_id"
                                value={authorId}
                                onChange={(e) => setAuthorId(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="">Sélectionnez un auteur</option>
                                {authors.map((author) => (
                                    <option key={author.id} value={author.id}>
                                        {author.name} 
                                    </option>
                                ))}
                            </select>
                        </div> */}
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
                            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <button type="submit" disabled={loading} className={`w-full p-2 text-white font-bold rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}>
                            {loading ? 'Chargement...' : 'Enregistrer le Livre'}
                        </button>
                        <button type="button" onClick={() => setIsModalOpen(true)} className={`w-full p-2 text-white font-bold rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}>
                            Ajouter un auteur
                        </button>
                    </div>
                </form>

                <AuthorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );

}

export default Booksave
