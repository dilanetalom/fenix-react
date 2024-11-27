
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById } from '../service/bookservice';

function Bookbyid() {
   
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const result = await getBookById(id as string); // Implémentez cette fonction dans bookservice
                setBook(result);
            } catch (error) {
                setError('Erreur lors de la récupération des détails du livre.');
            }
        };

        fetchBook();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!book) {
        return <div>Loading...</div>;
    }


            return (
                <div className="container mx-auto p-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
                        <img
                            src={`http://127.0.0.1:8000/${book.image}`}
                            alt={book.title}
                            className="w-full h-80 object-cover rounded-lg mb-4"
                        />
                        <div className="flex items-center mb-4">
                            <div className="mr-4">
                                <h2 className="text-2xl font-semibold">Auteur: {book.author.name}</h2>
                                <img
                                    src={`http://127.0.0.1:8000/${book.author.imageauthor}`}
                                    alt={book.author.name}
                                    className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                                />
                            </div>
                        </div>
                        <p className="text-lg"><strong>Date de publication:</strong> {book.pub_date}</p>
                        <p className="text-lg"><strong>Prix:</strong> ${book.price}</p>
                        <p className="text-lg"><strong>Description:</strong></p>
                        <p className="text-gray-700 mb-4">{book.description}</p>
                      <div className='flex gap-5'>
                      
                      <button  onClick={()=>navigate(`/booksupdate/${id}`)} className="mt-4 bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                            Modifier
                        </button>
                        <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                            Ajouter au panier
                        </button>
                      </div>
                    </div>
                </div>
    )
}

export default Bookbyid
