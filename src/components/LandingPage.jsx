import React, { useState } from 'react'
import { Input, Button, Link } from '@chakra-ui/react'
import Card from './Card';
import axios from 'axios';

const LandingPage = () => {
    const [ans, setAns] = useState(false)
    const [user, setUser] = useState("");
    const [data, setData] = useState("")
    const addHandle = () => {
        setUser(user)
        axios.get(`https://api.github.com/users/${user}`).then((r) => {
            setData(r.data)
            setAns(true)
        }).catch((e) => {
            alert("Please use valid username")
            console.log(e);
        })
    }
    console.log(ans);
    return (
        <>
            <div style={{ display: "flex", width: "50%", margin: "auto", gap: "10px" }} >
                <Input variant='filled' placeholder='User Name' onChange={(e) => setUser(e.target.value)}>
                </Input>
                <Button onClick={addHandle}>search</Button>
            </div>
            {ans ? <Card data={data} /> :
                <div>
                    <h1>Wellcome to git directory</h1>
                </div>
            }
        </>
    )
}

export default LandingPage
