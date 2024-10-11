import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useBarberProductData } from './hooks/useBarberProductData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useBarberProductData();
  const [isModalOpen, setIsModalOpen]= useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className="container">
      <h1>Produtos e Serviços</h1>
      <div className="card-grid">
        {data?.map(barberProductData => 
          <Card 
            image={barberProductData.image} 
            title={barberProductData.title} 
            description={barberProductData.description} 
            price={barberProductData.price}/>)}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>New</button>
    </div>
  )
}

export default App
