import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById, updateBooks } from '../service/bookservice';

interface InitialData {
    title: string;
    category: string;
    language: string;
    format: string;
    niveau: string;
    pub_date: string;
    price: number;
    user_id: number;
    author_id: string;
    description: string;
}



const Bookupdate : React.FC =() => {

    const { id } = useParams<{ id: string }>();

    const bookId = id as string;


    const [initialData, setInitialData] = useState<InitialData | null>(null);
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [format, setFormat] = useState<string>('');
    const [niveau, setNiveau] = useState<string>('');
    const [pubDate, setPubDate] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [userId, setUserId] = useState<number>(0);
    const [authorId, setAuthorId] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const result = await getBookById(bookId);
                setInitialData(result);
            } catch (error) {
                console.error("Erreur lors de la récupération du livre :", error);
            }
        };

        fetchBook();
    }, [id]);

    // Met à jour les états si initialData est disponible
    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setCategory(initialData.category);
            setLanguage(initialData.language);
            setFormat(initialData.format);
            setNiveau(initialData.niveau);
            setPubDate(initialData.pub_date);
            setPrice(initialData.price);
            setUserId(initialData.user_id);
            setAuthorId(initialData.author_id);
            setDescription(initialData.description);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('language', language);
        if (image) {
            formData.append('image', image);
        }
        formData.append('format', format);
        formData.append('niveau', niveau);
        formData.append('pub_date', pubDate);
        formData.append('price', price.toString()); // Convertit le nombre en chaîne
        formData.append('user_id', userId.toString());
        formData.append('author_id', authorId);
        formData.append('description', description);

        // Appeler la fonction onSubmit pour traiter les données
        
        updateBooks(bookId , formData);
    };

    

    return (
       <div className='w-full h-screen flex justify-center items-center '>
         <form onSubmit={handleSubmit} className='w-[60%] h-[80%]'>
            <div className="grid grid-cols-2 gap-5">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="title">Titre</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="category">Catégorie</label>
                    <input
                        type="text"
                        id="category"
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="language">Langue</label>
                    <input
                        type="text"
                        id="language"
                        name='language'
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        name='image'
                        onChange={(e) => e.target.files && setImage(e.target.files[0])}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="format">Format</label>
                    <input
                        type="text"
                        id="format"
                        name='format'
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="niveau">Niveau</label>
                    <input
                        type="text"
                        id="niveau"
                        name='niveau'
                        value={niveau}
                        onChange={(e) => setNiveau(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="pub_date">Date de publication</label>
                    <input
                        type="date"
                        id="pub_date"
                        name='pub_date'
                        value={pubDate}
                        onChange={(e) => setPubDate(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="price">Prix</label>
                    <input
                        type="number"
                        id="price"
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="user_id">ID Utilisateur</label>
                    <input
                        type="number"
                        id="user_id"
                        name='user_id'
                        value={userId}
                        onChange={(e) => setUserId(Number(e.target.value))}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4 w-full">
                    <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
            <div className='flex gap-5'>
                <button type="submit" className="w-full p-2 text-white font-bold rounded bg-blue-500 hover:bg-blue-600">
                    Modifier le livre
                </button>
            </div>
        </form>
       </div>
    );
};


export default Bookupdate


