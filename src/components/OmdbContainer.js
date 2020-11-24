import React, { useState, useEffect } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import UserDetail from "./UserDetails";
import API from "../utils/API";
function OmdbContainer() {
const [resultUsers, setResultUsers] = useState([]);
const[search, setSearch] = useState("");
  useEffect( function(){
    searchUsers()
  }, [] ) //send in empty set of variables
  async function searchUsers(){
    const res = await API.getUsers()
    console.log(res.data)
      setResultUsers( res.data.results )
  }

  async function handleInputChange( event ){
    console.log( `[handleINputChange] called value=${event.target.value}`)
    //update our search variable
    //call the 'searchUsers()' function
    await setSearch( event.target.value )
  }

  //handle button click
  async function handleFormSubmit(event){
    event.preventDefault()
    let res = resultUsers.filter( function(el) {
      if ((el.name.first).toLowerCase().indexOf((search).toLowerCase()) !== -1) {
        return el;
    }})
    setResultUsers(res)
    console.log('search results', res)
  }

  async function handleFormSort(event){
    event.preventDefault()
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      console.log("SORT",a.name.first,b.name.first)
      const personA = a.name.first.toUpperCase();
      const personB = b.name.first.toUpperCase();
    
      let comparison = 0;
      if (personA > personB) {
        comparison = 1;
      } else if (personA < personB) {
        comparison = -1;
      }
      return comparison;
    }
    let res = resultUsers.sort(compare)
    console.log("clicked on sort button")
    setResultUsers([...res])
    console.log("sort result",resultUsers)
    // console.log('search results', res)
  }


    return (
      <Container>
        <Row>
           <Col size="md-12">
            <Card heading="Search">
              <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                handleFormSort={handleFormSort}
              />
            </Card>
          </Col>
        </Row>
        <Row>
           <Col size="md-12">
           <table class="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {resultUsers.map(user=>(
            <UserDetail 
              picture={user.picture.thumbnail}
              firstname={user.name.first}
              lastname={user.name.last}
              email={user.email}
            />
             ))}
  </tbody>
  </table>
             </Col>
        </Row>
      </Container>
    );
  }
export default OmdbContainer;
