import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DetailsView from "./DetailsView";
import BackDrop from "./BackDrop";
import Options from "./Options";
import AddMovie from "./AddMovie";
import SeriesOption from "./SeriesOption";
import AddSeries from "./AddSeries";

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import style from '../assets/css/Movies.module.css';



function Movies() {

  const [details,setDetails] = useState(false);
  const [movies,setMovies] = useState([]);
  const [info,setInfo] = useState([]);
  const [choice,setChoice] = useState('');

  const history = useHistory();

  function fetchData(){
   
    axios
    .get("http://localhost:3000/v1/admin/allmedia")
    .then(function (response) {
      
      const data = response.data;
      setMovies(data);
      
     
      
    })
    .catch(function (error) {
      console.log(error);
    });
}
  useEffect(() => {
    fetchData();
  },[]);

  function deleteItem(prop){
    const key = prop;

    axios.delete("http://localhost:3000/v1/admin/deletemedia", {

      data: {
        id: key
      }
    })
    history.go(0);
  };

  
  function detailsView(item){
    setInfo(item);
    setDetails(true);
    
  }
  function closeDetails(){
    setDetails(false);
  }
  function optionsView(){
    setChoice('options');
  }
  function addMovie(){
    setChoice('movie');
  }
  function addSeries(){
    setChoice('series');
  }
  function clear(){
    setChoice('clear');
    
  }
  function newSeries(){
    setChoice('new');
    
  }
  function oldSeries(){
    setChoice('old');
    
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List of Items</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
                {/* <button className={style.add} onClick={optionsView}>Add New</button> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      
                      <th className="border-0">Title</th>
                      <th className="border-0">Type</th>
                      <th className="border-0">Language</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      movies.slice(0).reverse().map((item)=>(
                        <tr>
                      <td style={{cursor:"pointer"}} onClick={() => detailsView(item)}>{item.title}</td>
                      <td>{item.type}</td>
                      <td>{item.fixedlanguage}</td>
                      <td>{item.date}</td>
                      <td style={{cursor:"pointer"}} onClick={() =>deleteItem(item._id)}>Delete</td>
                    </tr>
                      ))
                    }
                  </tbody>
                </Table>
                    {details && <BackDrop />}
                    {details && <DetailsView state={info} action={closeDetails}  />}
                    {/* {choice === 'options' && <BackDrop action={closeDetails} clear={clear}/>}
                    {choice === 'options' && <Options movie={addMovie} series={addSeries} />} */}
                    {/* {choice === 'movie' && <BackDrop action={closeDetails} clear={clear}/>}
                    {choice === 'movie' && <AddMovie clear={clear} />} */}
                    {/* {choice === 'series' && <BackDrop />}
                    {choice === 'series' && <SeriesOption new={newSeries} old={oldSeries} />} */}
                    {/* {choice === 'new' && <BackDrop />}
                    {choice === 'new' && <AddSeries clear={clear} />} */}
                    {/* {choice === 'old' && <BackDrop />}
                    {choice === 'old' && <AddSeries clear={clear} />} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Movies;
