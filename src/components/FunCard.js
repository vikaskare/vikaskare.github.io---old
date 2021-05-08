import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FunCard({ title, image, description, link }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} className="card-image" />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <Button variant="primary">Play Now </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default FunCard;
