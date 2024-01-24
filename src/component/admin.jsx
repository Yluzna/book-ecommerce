import react from "@vitejs/plugin-react-swc";
import '.App.css';
import axios from 'axios';
import { Component } from "react";

const url="http://localhost:3000/";

class App extends Component {
    state={
        data:[]
    }
    peticiones=()=> {
       axios.get(url).then (response=>  {
console.log(response.data)
       })
    }
    
    componentDidMount() {
this.peticionesGet();
    }
render(){
    return (
<table className="table">
    <thead>
        <tr>
        <tr>Id</tr>
        <tr>name</tr>
        <tr>price</tr>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
    );
 }
   
 export defaul App;
