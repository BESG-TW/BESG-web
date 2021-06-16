import axios from 'axios';


export default function handler(req, res) {
  axios.get('https://google.com')
    .then(res => console.log(res.data))
  res.status(200).json({ })
  
}
