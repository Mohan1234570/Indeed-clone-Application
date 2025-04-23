
import Header from '../components/Header';
import { useState,useEffect } from "react";
import { getAllPosts } from "../services/api";
import { Box, InputBase, Typography,Card, CardContent, Grid,Container } from '@mui/material'
import { makeStyles } from '@mui/styles';
import SearchBar from './SearchBar';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '20px',
        backgroundColor: '#f5f5f5', // Light background color
        marginTop: '60px', // Add space to prevent the search bar from being hidden by the navbar
    },
    searchBar: {
        width: '100%',
        backgroundColor: '#fff',
        padding: '10px 20px',
        borderRadius: '4px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 10, // Ensure the search bar is above other content
        position: 'relative', // Ensure it's positioned correctly relative to the content
    },
    cardContainer: {
        marginTop: '20px',
    },
    card: {
        marginBottom: '15px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardContent: {
        padding: '15px',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: '#333',
    },
    description: {
        fontSize: '1rem',
        color: '#555',
        marginTop: '10px',
    },
    details: {
        fontSize: '0.9rem',
        color: '#777',
        marginTop: '5px',
    },
}));




const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered posts
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // To store search input value
    const classes = useStyles();
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await getAllPosts();
          if (Array.isArray(response)) {
            setPosts(response);
            setFilteredPosts(response); // Initially, show all posts
          } else {
            setError('No posts available or invalid response format');
          }
        } catch (err) {
          setError('Error fetching posts');
          console.error('Error:', err);
        }
      };
  
      getData();
    }, []);
  
    useEffect(() => {
      if (searchQuery === '') {
        setFilteredPosts(posts); // Show all posts when the search bar is empty
      } else {
        // Filter posts based on the search query (case-insensitive)
        const filtered = posts.filter((post) =>
            post.profile && post.profile.toLowerCase().includes(searchQuery.toLowerCase()) // Safe check for null/undefined
          );
        setFilteredPosts(filtered);
      }
    }, [searchQuery, posts]);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      
      <Container>
        <Header />  
        
        <Box sx={{ mt: 12, mb: 3 }}>
        <SearchBar onSearch={setSearchQuery} />
      </Box>{/* Pass search function as prop */}
        
  
        <Grid container spacing={3} sx={{ pt: 3 }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" className={classes.title}>
                      {post.profile || 'No Profile'}
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                      {post.description || 'No Description'}
                    </Typography>
                    <Typography variant="body2" className={classes.details}>
                      Salary: {post.salary || 'Not specified'}
                    </Typography>
                    <Typography variant="body2" className={classes.details}>
                      Experience: {post.experience || 'Not specified'}
                    </Typography>
                    <Typography variant="body2" className={classes.details}>
                      Created on: {new Date(post.createdDate).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <p>No posts available</p>
            </Grid>
          )}
        </Grid>
      </Container>
    );
  };
  
  export default AllPosts;