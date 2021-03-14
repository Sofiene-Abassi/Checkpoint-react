import './App.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function App() {
  return (
    <div className="App">
      
    <ul style={{display:'flex',justifyContent:"space-around",fontSize:"150%"}}>
      <li>Home</li>
      <li>Contact</li>
      <li>About-me</li>
      </ul>
      <h1 style = {{color:"red", margin:"5%"}}>WELCOME BACK,GUEST !</h1>
      <h2 style = {{color:"grey"}}>You can enter your credentials using the form down-below</h2>
      <br/>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br/>
<p style = {{fontWeight: "bold"}}>If you encounter any issues logging-in, please send an email to support@thiswebsite.com  and we will sort your issue as soon as possible Thank you ! </p>
    </div>
  );
}

export default App;

