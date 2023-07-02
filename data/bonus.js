const axios = require('axios');

const bonus = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8888/api/bonus", {
      headers: {
        'Content-Type': 'application/json',
      }
   
    });
    
    console.log(response.data);
  
    
   return response.data;
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

const bonusById = async (id) => {
  try {
    const response = await axios.get("http://localhost:8888/api/bonus/" + id)

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    // res.status(500).json({ error: 'An error occurred' });
   
  }
}


module.exports ={bonus ,bonusById}


