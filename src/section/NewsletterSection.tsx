import React, { useState } from 'react'
import { API_URL } from '../components/Url';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Newsletter:React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('inconnu');
  const [phone, setPhone] = useState<string>('0000');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setName('');
      setPhone('');

      try {
          const response = await axios.post(`${API_URL}/readers`, { email, name, phone },);
          console.log('Reader added:', response.data);
          setEmail('');
          toast.success(' enregistré avec succès !');   
          // setTimeout(() => {
          //     window.location.reload();
          // }, 1000);
      
        
      } catch (error) {
          console.error('Error adding reader:', error);
      } finally {
          setLoading(false);
         
      }

  };




  return (
    <div className='w-full lg:h-[215px] orangebackcolor text-white'>
        <ToastContainer />
      <div className='w-full h-full mx-auto container py-10 flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between'>
      <div className='lg:w-[500px] flex flex-col gap-2'>
             <h4 className='texth4 font-bold'>Souscrivez à notre newsletter
             pour ne rien manquer</h4>
             <p className='text-[13px]  lg:text-[14px]'>Restez informé de toutes nos dernières nouvelles, conseils,
             et réalisations en vous inscrivant à notre newsletter</p>
       </div>
       <form 
       onSubmit={handleSubmit}
       className='flex lg:flex-row flex-col gap-5 items-center'>
              <input type="email" 
               name='email'
               onChange={(e)=>setEmail(e.target.value)}
              className='outline-none w-full border-b-[0.1px] border-white orangebackcolor text-[12px] text-white placeholder-white placeholder-opacity-45' placeholder='Entrer votre email'/>
              <button
              type='submit'
              className='bg-black px-[10px] py-[8px] w-full rounded-[5px]'>
                {loading ? 'Chargement...' : '  je m’inscris '}
                </button>
       </form>
      </div>
    </div>
  )
}

export default Newsletter
