import { useState } from "react";
import {
  Row,
 
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
 
  Container,
} from "react-bootstrap";

import NewsList from "./Components/NewsList";


function App() {
  const [isGridView, setIsGridView] = useState(true);
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };


  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            News App
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <div style={{marginLeft:"10px"}} onClick={() => handleCategoryClick("world")} >World</div>
              <div style={{marginLeft:"20px"}} onClick={() => handleCategoryClick("business")} >Business</div>
              <div style={{marginLeft:"20px"}} onClick={() => handleCategoryClick("technology")} >Technology</div>
              <div style={{marginLeft:"20px"}} onClick={() => handleCategoryClick("sports")}>Sports</div>
              <div style={{marginLeft:"20px"}} onClick={() => handleCategoryClick("entertainment")}>Entertainment</div>
             
            </Nav>
           
              
              
            
         

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Input category"
                className="me-2"
                name="search"
                
              />

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
        <button
        
        style={{ backgroundColor: "white", border: "white", width:"20px", paddingLeft:"60px" }}
        onClick={toggleView}
      >
        <img
          style={{ width: "40px", height: "40px", backgroundColor: "white" }}
          src={
            isGridView
              ? "https://i.ibb.co/C9m9z9Z/list.png"
              : "https://i.postimg.cc/NFMGXbjN/grid.png"
          }
        />
      </button>

          <div style={{width:"100%",display:"flex", flexDirection: isGridView ? "row" : "column", flexWrap: "wrap",  paddingLeft: isGridView ? "50px" : "500px"}}>
            
          <NewsList category={category} searchTerm={searchTerm} />
          </div>
            
         
        </Row>
      </Container>
    </>
  );
}

export default App;
