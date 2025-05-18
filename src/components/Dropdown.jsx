import { Select, MenuItem, FormControl, InputLabel, Box,Chip } from '@mui/material'




// const Dropdown = ({

//       id,
//       value,
//       label,
//       handleChange,
//       name,
//       options,
//       ...props
// }) => {

//      return (
//       <FormControl>
//         <InputLabel id={id}>{label}</InputLabel>
//        <Select
//           labelId={id}
//           id={id}
//           value={value}
//           label={label}
//           onChange={handleChange}
//           name={name}
//           {...props}
//        >
//           {
//            options.map(option => (
//                <MenuItem value={option}>{option}</MenuItem>

//            ))

//         }
          
//        </Select>
//      </FormControl>
//    )

// }

// export default Dropdown;

const Dropdown = ({
   id,
   value,
   label,
   handleChange,
   name,
   options,
   multiple = false, // Add multiple prop to allow for multiple selections
   error, helperText,
   ...props
}) => {
   return (
       <FormControl fullWidth>
           <InputLabel id={id}>{label}</InputLabel>
           <Select
               labelId={id}
               id={id}
               value={value}
               label={label}
               onChange={handleChange}
               name={name}
               multiple={multiple} // Enable multiple selections
               renderValue={(selected) => {
                   if (multiple) {
                       return (
                           <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                               {selected.map((val) => (
                                   <Chip key={val} label={val} sx={{ margin: 0.5 }} />
                               ))}
                           </Box>
                       );
                   }
                   return selected;
               }}
               {...props}
           >
               {options.map((option, index) => (
                   <MenuItem key={index} value={option}>
                       {option}
                   </MenuItem>
               ))}
           </Select>
       </FormControl>
   );
};

export default Dropdown;