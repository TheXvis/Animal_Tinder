import React, { useState, useEffect } from 'react';

const Card = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');


  const nombres = ['Fido', 'Luna', 'Rocky', 'Max', 'Bella', 'Charlie', 'Lucy', 'Duke', 'Daisy','Reyna', 'Fiodor', 
  'Dopa', 'Canela', 'Soldado', 'Cazador', 'Sol', 'Rey', 'Trueno','Camaron', 'Pequeño', 'Bestia', 'Manchitas', 'Salao', 
  'Sonrisa', 'Lucky', 'Razon', 'Esperanza', 'Pool', 'Doraemon', 'Satan', 'Teorema', 'Salazar', 'Cariñoso', 'Matador'];

  const nameRandomImage = () => {

    const uniqueName = Math.floor(Math.random() * nombres.length);
    return nombres[uniqueName];
  };

  const fetchRandomImage = () => {

    const uniqueName = nameRandomImage();
    
    // Hacer la solicitud a la API para obtener una imagen aleatoria
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Establecer la URL de la imagen en el estado
        setImageUrl(data.message);
        setImageName(uniqueName);
      })
      .catch((error) => {
        console.error('Error al cargar la imagen:', error);
        fetchRandomImage();
      });
  };

  useEffect(() => {
    fetchRandomImage();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>Nombre: {imageName}</p>
      {imageUrl && <img src={imageUrl} alt="Random Dog" />}

      <br/>
      <button className='boton' onClick={fetchRandomImage}>Aceptar</button>
      <button className='boton2' onClick={fetchRandomImage}>Rechazar</button>
    </div>
  );
};

export default Card