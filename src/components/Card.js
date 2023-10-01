import React, { useState, useEffect } from 'react';

const Card = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');

  const [acceptedDogs, setAcceptedDogs] = useState([]);
  const [rejectedDogs, setRejectedDogs] = useState([]);



  const nombres = ['Fido', 'Luna', 'Rocky', 'Max', 'Bella', 'Charlie', 'Lucy', 'Duke', 'Daisy','Reyna', 'Fiodor', 
  'Dopa', 'Canela', 'Soldado', 'Cazador', 'Sol', 'Rey', 'Trueno','Camaron', 'Pequeño', 'Bestia', 'Manchitas', 'Salao', 
  'Sonrisa', 'Lucky', 'Razer', 'Esperanza', 'Pool', 'Doraemon', 'Satan', 'Teorema', 'Salazar', 'Vegeta', 'Matador'];

  const nameRandomImage = () => {

    const uniqueName = Math.floor(Math.random() * nombres.length);
    return nombres[uniqueName];
  };

  const fetchRandomImage = () => {

    const uniqueName = nameRandomImage();
    
    // Hacer la solicitud a la API para obtener una imagen aleatoria
    fetch('https://dog.ceo/api/breeds/image/random')
      
    
      .then((response) => {
      if(!response.ok){
        throw new Error('Error al cargar la img');
      }
      return response.json();
      })
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

  const aceptados = () =>{
    setAcceptedDogs([...acceptedDogs, {name: imageName, imageUrl}]);
    fetchRandomImage();
  }

  const rechazados = () =>{
    setRejectedDogs([...rejectedDogs, {name: imageName, imageUrl}]);
    fetchRandomImage();
  }

  useEffect(() => {
    fetchRandomImage();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>Nombre: {imageName}</p>
      {imageUrl && <img src={imageUrl} alt="Random Dog" />}

      <br/>
      <button className='boton' onClick={aceptados}>Aceptar</button>
      <button className='boton2' onClick={rechazados}>Rechazar</button>

      <div className='aceptados'>
      <h2>Perros aceptados</h2>
      <ul>
        {acceptedDogs.map((dog, index) =>(
          <li key={index}>
            <p>Nombre: {dog.name}</p>
            <img className='imagenlista' src={dog.imageUrl} alt="Perros aceptados"/>
          </li>
        ))}
      </ul>
      </div>

      <div className='rechazados'>
      <h2>Perros rechazados</h2>
      <ul>
        {rejectedDogs.map((dog, index) =>(
          <li key={index}>
            <p>Nombre: {dog.name}</p>
            <img className='imagenlista' src={dog.imageUrl} alt="Perros rechazados"/>
          </li>
        ))}
      </ul>
      </div>
    </div>
    

  );
};

export default Card