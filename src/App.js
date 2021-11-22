import React, {useEffect, useState} from 'react'
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";

function App() {
    const [item, setItem] = useState([])
    useEffect(() => {
        console.log('render')
        getShares()
    })
    const getShares = () => {
        axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=4d1255154b11183450dca74fb6df030a')
            .then(function (response) {
                // handle success
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    return <div>  

        <Header/>
        <Container>
            <div className="App">
                <h1>{item}</h1>
                <img
                    src={'https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj'}
                    alt='APPL'/>
                <span>Appl</span>
                <span>123$</span>
                <Button variant="contained">Hello World</Button>

            </div>
        </Container>
    </div>

}


export default App;
