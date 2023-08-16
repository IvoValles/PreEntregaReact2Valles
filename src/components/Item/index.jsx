import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const Item = ({ id, tipo, precio, nombre }) => {
  return (
    <Col>
      <Card style={{ minHeight: '100%' }}>
        <Card.Img variant="top" src={''} onError={(e) => (
          (e.target.src =
            "https://img.freepik.com/vector-gratis/logo-deportivo-zapatillas_23-2148558728.jpg?w=1380&t=st=1692154356~exp=1692154956~hmac=16a6866dead069955c933495c4e4cb881b05a79391e765458a8593f5edba0f8c")
        )
        } style={{ height: 310, objectFit: 'cover' }} />
        <Card.Body style={{ minHeight: '180px' }}>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {tipo}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${precio}</ListGroup.Item>
          <ListGroup.Item><Link to={`/Item/${id}`}>Detail</Link></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
