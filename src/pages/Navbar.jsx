import { Stack } from "@mui/material"


const Navbar = () => {
  return (
    <Stack 
      direction='row' 
      alignItems='center' 
      pl={7} 
      pr={7} 
        sx={{ position: 'sticky', backgroundColor: '#F9C80E', top: 0, justifyContent: 'space-between', color: '#00040B' }}
    >
      <div className="nav">
        <h5>CHECK MY POSTCODE</h5>
      </div>
      <div className="navbar">
        <h6>Home</h6>
        <h6>Lists</h6>
        <h6>Maps</h6>
        <h6>Nearest Postcodes</h6>
        <h6>lottery</h6>
        <h6>FAQs</h6>
      </div>
    </Stack>
  )
}

export default Navbar