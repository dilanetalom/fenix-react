import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
// import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import axios from 'axios';
import { API_URL } from './Url';
import { Book } from '../section/TypebookSection';
import { API_URLE } from './Url';
interface modalprops {
    isOpen: boolean;
    currentBooks:Book
    onCloses: () => void;

}
const Downloadmodal: React.FC<modalprops> = ({ isOpen, onCloses, currentBooks }) => {

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
     

        try {
            const response = await axios.post(`${API_URL}/readers`, { email, name, phone },);
            console.log('Reader added:', response.data);
            
            toast.success('Lecteur enregistré avec succès !'); 
            await generatePDF();   
            setTimeout(() => {
                window.location.reload();
            }, 1000);
          
        } catch (error) {
            console.error('Error adding reader:', error);
        } finally {
            setLoading(false);
           
        }

    };



    const generatePDF = async () => {
        const doc = new jsPDF();
    console.log(currentBooks.image);
    
        // Ajouter l'image
        // const image = await loadImage(currentBooks.imageUrl);
        const image = await loadImage( `${API_URLE}/images/books/${currentBooks.image}`)
        doc.addImage(image, 'JPEG', 10, 10, 50, 50);
    
        // Ajouter le titre
        doc.setFontSize(20);
        doc.text(currentBooks.title, 70, 20);
    
        // Ajouter la description
        doc.setFontSize(12);
        doc.text(currentBooks.description, 10, 70, { maxWidth: 180 });
    
        // Ajouter d'autres informations
        doc.text(`Date de publication: ${currentBooks.pub_date}`, 10, 90);
        doc.text(`Langue: ${currentBooks.language}`, 10, 100);
        doc.text(`Prix numérique: ${currentBooks.price_n}`, 10, 110);
        doc.text(`Prix physique: ${currentBooks.price_p}`, 10, 120);
    
        // Sauvegarder le fichier PDF
        doc.save('Livre.pdf');
    };
    
    // Fonction pour charger l'image
    const loadImage = (url: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // Nécessaire pour éviter les problèmes de CORS
            img.src = url;
            img.onload = () => resolve(img.src);
            img.onerror = (error) => reject(error);
        });
    };
    
    // Appeler la fonction pour générer le PDF
    // generatePDF();

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]" onClick={onCloses} >
                    <ToastContainer />

                    <div className=" rounded-lg overflow-hidden shadow-lg h-[580px] lg:w-[550px] flex flex-row gap-3 p-10" onClick={(e) => e.stopPropagation()} >
                        <form onSubmit={handleSubmit} className='lg:w-[473px] w-full  h-full flex flex-col justify-between opacitybackcolor rounded-lg lg:px-10 px-5 lg:py-16 py-8'>
                            <div className='w-full flex justify-center'>
                                <div className=' text-[13px] text-red-500 flex justify-center items-center text-center w-[342px] h-[38px] border border-red-500 padding-[10px]'>
                                    Tous les champs marqués d'un * sont obligatoires
                                </div>
                            </div>


                            <div className='flex flex-col '>
                                <label htmlFor="" className='font-bold'>Votre nom <span className='text-red-600'>*</span></label>
                                <input type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='p-3 h-[60px]  bg-white rounded-[5px] outline-none' placeholder='Votre Nom' />

                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="" className='font-bold'>Votre email <span className='text-red-600'>*</span></label>
                                <input type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='p-3 h-[60px]  bg-white rounded-[5px] outline-none' placeholder='Votre email' />
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="" className='font-bold'>Votre téléphone</label>
                                <input type='number'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className='p-3 h-[60px]  bg-white rounded-[5px] outline-none' placeholder='Votre téléphone' />
                            </div>


                            <button type='submit'
                            
                            disabled={loading} className='w-full h-[48px] rounded-[5px] bg-black text-white'>
                                {loading ? 'Chargement...' : ' Téléchager'}
                                </button>

                        </form>
                        <button
                            type="button"
                            className=" text-white px-4 py-2 rounded border border-white  h-12 md:block hidden"
                            onClick={onCloses}
                        >
                            ✖
                        </button>
                       

                    </div>
                </div >
            )}
        </>
    );
};

export default Downloadmodal