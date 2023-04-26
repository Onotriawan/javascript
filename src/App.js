import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(number1) - parseFloat(number2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(number1) * parseFloat(number2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseFloat(number1) / parseFloat(number2);
    setResult(quotient);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mini Calculator</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Number 1</Form.Label>
            <Form.Control
              type="number"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Number 2</Form.Label>
            <Form.Control
              type="number"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
            />
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button variant="primary" className="me-2" onClick={handleAddition}>
            Add
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={handleSubtraction}
          >
            Subtract
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={handleMultiplication}
          >
            Multiply
          </Button>
          <Button variant="primary" onClick={handleDivision}>
            Divide
          </Button>
        </div>
      </Form>
      {result !== null && (
        <div className="text-center mt-5">
          <h3>Result: {result.toString()}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
