import { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";
import SearchBar from "./SearchBar";


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
    const [data, setData] = useState({
        profile: '',
        type: '',
        description: '',
        experience: '',
        technology: [],  // Make sure this is initialized as an array
        salary: ''
    });

    const navigate = useNavigate();

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "technology") {
            setData((prevData) => ({
                ...prevData,
                [name]: Array.isArray(value) ? value : value.split(',') // Ensure it's an array
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    // ✅ Validation function
    const validateForm = () => {
        if (!data.profile.trim()) {
            alert("Please enter the Job Title.");
            return false;
        }
        if (!data.type) {
            alert("Please select the Job Type.");
            return false;
        }
        if (!data.description.trim()) {
            alert("Please enter the Job Description.");
            return false;
        }
        if (!data.experience) {
            alert("Please select the Experience.");
            return false;
        }
        if (!data.technology.length) {
            alert("Please select at least one Technology.");
            return false;
        }
        if (!data.salary) {
            alert("Please select the Salary Range.");
            return false;
        }
        return true;
    };

    const saveJob = async () => {
        if (!validateForm()) return;
        console.log("Form data before sending:", data); // 👈 log this
        try {
            await savePost(data);
            navigate('/posts');
        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

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
                        multiple={true} // Enable multiple selection
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
    );
}

export default CreatePost;
