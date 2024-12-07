import React, { useRef, useState } from 'react'
import Layouts from '../partials/Layouts'
import Newsletter from '../section/NewsletterSection'
import contact from "../images/contact.png"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact: React.FC = () => {
    const phoneNumber = '690841749'; // Remplacez avec votre numéro
    const message = encodeURIComponent('Bonjour, j\'ai besoin d\'aide !'); // Message pré-rempli

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank'); // Ouvre le lien dans un nouvel onglet
    };



    const handleClicks = () => {
        const url = `tel:${phoneNumber}`;
        window.location.href = url; // Lance l'appel
    };


    const email = 'hello@kiriaa.gmail.com'; // Remplacez par l'adresse e-mail souhaitée
    const subject = encodeURIComponent('Bonjour'); // Sujet de l'e-mail
    const body = encodeURIComponent('J\'ai besoin d\'aide !'); // Corps du message

    const handleClicke = () => {
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink; // Ouvre le client de messagerie par défaut
    };

    const contactitem = [
        {
            id: 1,
            title: "+237 698 615 740 / 654 146 338",
            icon: <FaPhone size={20} />,
            action: handleClicks
        },
        {
            id: 2,
            title: "hello@finex.gmail.com",
            icon: <FaEnvelope size={20} />,
            action: handleClicke
        },
        {
            id: 3,
            title: "Whatsapp",
            icon: <FaWhatsapp size={20} />,
            action: handleClick
        },
        {
            id: 4,
            title: "Ange rapheal campus 1",
            icon: <FaMapMarkerAlt size={20} />,
            action: ()=>{}
        },
    ]



    const [isLoading, setIsLoading] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

      const sendEmail = (e:React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        if (formRef.current) {
            console.log(formRef.current);
            
        emailjs.sendForm(
            'service_t1o4iw5',
            'template_41o9ic2',
             formRef.current,
            'OpjM0V3NsMzBgISBV'
          )
            .then(() => {
              toast.success('Votre message a été envoyé avec succès !');
            })
            .catch(() => {
              toast.error('Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.');
            })
            .finally(() => {
              setIsLoading(false);
              formRef.current?.reset();
            });
    
        }
      };

      


    return (
        <>
            <Layouts>
            <ToastContainer />
                <div className='w-full h-auto bg-white'>
                    <div className='py-24 container lg:h-[780px] w-full grid lg:grid-cols-2 grid-cols-1 mx-auto gap-20 md:mt-20 mt-0'>
                        <div className='flex flex-col'>
                            <div className='w-full h-2/5'>
                                <img src={contact} className='w-full h-full object-cover object-center rounded-t-md' alt="" />
                            </div>
                            <div className='w-full h-3/5 p-8 graybackcolor rounded-b-md flex flex-col justify-between '>
                                {
                                    contactitem.map((item) => {
                                        const handleClick = (): void => {
                                            item.action
                                        };
                                        return (
                                            <div onClick={handleClick} key={item.id} className=' cursor-pointer w-full h-[63px] border border-white rounded-md text-white flex flex-row justify-between items-center px-3 '>
                                                <div className='flex flex-row  items-center gap-2 lg:text-[16px] text-[13px]'>
                                                    <span>{item.icon}</span>
                                                    <span>{item.title}</span>
                                                </div>
                                                <div className=''></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex flex-col justify-between '>
                            <div>
                                <h2 className='texth2 font-bold'>ECRIVEZ-VOUS</h2>
                                <div className='h-[3px] w-[98px] orangebackcolor'></div>
                            </div>
                            <form  ref={formRef} onSubmit={()=>sendEmail}action="" className='flex flex-col gap-3'>
                                <input type="text"
                                    name="email"
                                    className='w-full h-[63px] rounded-[10px] border-[1px] outline-none px-3' placeholder='Votre adresse email *' />
                                <input type="text"
                                    name="phone"
                                
                                    className='w-full h-[63px] rounded-[10px] border-[1px] outline-none px-3' placeholder='Votre numéro de téléphone *' />
                                <textarea 
                                    name="message"
                                 
                                    id="" className='h-[231px] w-full rounded-[10px] border-[1px] outline-none p-3' placeholder='Votre message *'>
                                </textarea>
                                <button type='submit' disabled={isLoading} className='w-full h-[63px]  rounded-[10px] orangebackcolor text-white font-bold '>
                                {isLoading ? 'Envoi en cours...' : 'ENVOYEZ'}
                                </button>
                                <p className='text-[11px] text-center'>Nous vous répondrons le plutot possible.</p>
                            </form>
                            <div className='flex flex-row gap-3 justify-center'>
                                <Link to=""> <FaFacebook size={20} /></Link>
                                <Link to=""><FaYoutube size={20} /></Link>
                                <Link to=""> <FaLinkedin size={20} /></Link>
                                <Link to=""><FaInstagram size={20} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </Layouts>
        </>
    )
}

export default Contact