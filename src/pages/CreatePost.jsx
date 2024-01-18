import { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";



const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5'
})

const Container = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize: 35,
        fontWeight: 700,
        opcity: '.7'
    }
})

const FormWrapper = styled(Box)({
     display: 'flex',
     flexDirection: 'column',
     marginTop: 20,
     padding: 20,
     background: '#FFFFFF',
     borderRadius: 20,
     '& > *':{
        marginTop:'20px !important',

     }
})

const defaultObj = {
    profile: "",
    type: "",
    description: "",
    experience: "",
    technology: [],
    salary: ""
}

const options = {
    type: ["Online", "Offline"],
    experience: ["0-2 Years", "3-5 Years", "5-8 Years", "8 and more years"],
    technology: ["Java", "JavaScript", "Angular", "React", "Node.js", "Docker", "AWS","HTML","CSS","Python","C++","C"],
    salary: ["Rs 0-300000", "Rs 300000-500000", "Rs 500000-800000"]
}



const CreatePost = () => {
     const [data, setData] = useState({defaultObj});

     const navigate = useNavigate();
     

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
  
    const saveJob = async () => {
       await savePost();
       navigate(routhPath.posts);
    }


   
    return (
      <>
       <Header />
       <Component>
            <Container>
                <Typography>Create a job post</Typography>
               <img src={image} alt="create" />
            </Container>
            <FormWrapper>
                <TextField
                   placeholder="Job Title"
                   name="profile"
                   onChange={handleChange}
                />
              <Dropdown 
               label="Job Type"
               id="job-type-label"
               value={data.type}
               handleChange={handleChange}
               name="type"
               options={options.type}
                />
                <TextField 
                   placeholder="Job description"
                   name="description"
                   onChange={handleChange}
                />
                <Dropdown 
                    label="Experience"
                    id="job-experience-label"
                    value={data.experience}
                    handleChange={handleChange}
                    options={options.experience}
                    name="experience"
                />
                <Dropdown 
                     label="Technology"
                     id="job-technologylabel"
                     value={data.technology}
                     handleChange={handleChange}
                     options={options.technology}
                     name="technology"
                    
                />
                <Dropdown 
                     label="Salary"
                     id="job-salary-label"
                     value={data.salary}
                     handleChange={handleChange}
                     options={options.salary}
                     name="salary"
                />
                <Button onClick={() => saveJob()} variant="contained" >Save Job</Button>
            </FormWrapper>
        </Component>
       </>
    )
}


export default CreatePost;