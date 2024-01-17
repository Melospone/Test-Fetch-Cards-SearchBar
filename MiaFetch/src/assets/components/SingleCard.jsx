import {Card, Button} from "react-bootstrap" 


const SingleCard = ({dato, onElimina}) => {
  
return(
    <>
    <Card className="bg-secondary text-white mx-3 my-3" key={dato.id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={dato.thumbnailUrl} />
        <Card.Title className="text-info">{dato.title}</Card.Title>
        <Card.Text>{dato.body}</Card.Text>
        <Card.Text>{dato.userId}</Card.Text>
      </Card.Body>
      <div className="ml-3 mb-3">
        <Button variant="danger outline-danger" onClick={onElimina}>
          Delete
        </Button>
      </div>
    </Card>
  </>

)}


export default SingleCard;