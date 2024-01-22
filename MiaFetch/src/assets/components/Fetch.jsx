import React, { useState, useEffect } from "react";
import { Container, Row, Form } from "react-bootstrap";
import SingleCard from "../components/SingleCard";
import BarraRicerca from "../components/BarraRicerca"

function FetchCard() {
  const [data, setData] = useState([]);
  const [ricerca, setRicerca] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/photos";
  
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data);
      })
      .catch((error) => console.error("Errore nella richiesta:", error));
  }, []);

  
  const gestisciEliminazione = (idDaEliminare) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idDaEliminare}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore durante l'eliminazione");
        }
        setData((prevData) => prevData.filter((dato) => dato.id !== idDaEliminare));
      })
      .catch((error) => console.error("Errore durante l'eliminazione:", error));
      console.log(data);
  };


  
  /* funzione per searchBar */
  const handleRicercaChange = (nuovaRicerca) => {
    setRicerca(nuovaRicerca);
  };

  const filtraDati = () => {
    const dataFiltrati = data
    .filter((dato) => dato.title.toLowerCase().includes(ricerca.toLowerCase()))
    .slice(0, 12);
    return dataFiltrati
  };

  
  return (
    <>
      <Container className="cont d-flex justify-content-center"> 
        
    
        <BarraRicerca 
        ricerca={ricerca}
        onRicercaChange={handleRicercaChange}
        />
        <Row className="row">
          
        </Row>
       
      </Container>
      <Container className="d-flex flex-wrap">
      {filtraDati().map((dato) => (
            <SingleCard 
            thumbnailUrl={dato.thumbnailUrl}
              dato={dato}
              key={dato.id}
              userId={dato.userId}
              onElimina={() => gestisciEliminazione(dato.id)}
            />
          ))}
      </Container>
    </>
  );
}

export default FetchCard;