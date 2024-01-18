
import Header from '../components/Header';
import { useState,useEffect } from "react";
import { getAllPosts } from "../services/api";
import { Box, InputBase, Typography,Card, CardContent } from '@mui/material'



 



const AllPosts = () => {
    const [posts, setPosts] = useState([])
   


    useEffect(() => {
        const getData = async () => {
            const response =  await getAllPosts();
            setPosts(response.data);
        }
        getData();
    }, [])

    return (

    <>
        <Header />
        <Box>
            <InputBase 
               placeholder='Search by Job Title'
            />
        </Box>
        <Box>
            {
                posts.map(post => (
                    <Card>
                        <CardContent>
                            <Typography variant='h5'></Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </Box>
    </>
    )
}

export default AllPosts;