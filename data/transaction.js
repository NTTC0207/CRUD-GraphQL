const axios = require('axios');

const transaction = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8888/api/transaction", {
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

const transactionById = async (id) => {
  try {
    const response = await axios.get("http://localhost:8888/api/transaction/" + id)

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    // res.status(500).json({ error: 'An error occurred' });
   
  }
}


module.exports ={transaction,transactionById}


