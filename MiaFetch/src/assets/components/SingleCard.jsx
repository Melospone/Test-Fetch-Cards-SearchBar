import {Card, Button} from "react-bootstrap" 



const SingleCard = ({dato, onElimina}) => {
  
return(
    <> 
    <Card className="cardx bg-secondary text-white mx-3 my-3"  key={dato.id}>
      <Card.Body >
        <Card.Img variant="top rounded " src={dato.thumbnailUrl} />
        <Card.Title className="text-light my-4">{dato.title}</Card.Title>
        <Card.Text>{dato.body}</Card.Text>
        <Card.Text>{dato.userId}</Card.Text>
      </Card.Body>
      <div className="ml-3 mb-3">
        <Button variant="danger outline-danger my-2 mx-3 px-3 py-2" onClick={onElimina}>
          Delete
        </Button>
      </div>
    </Card>
  </>

)}


export default SingleCard;