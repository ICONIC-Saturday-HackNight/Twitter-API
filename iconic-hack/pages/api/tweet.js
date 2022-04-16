// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function handler(req, res) {
    const URL = "https://api.twitter.com/2/tweets/1515059837448691715";
    const BearerToken = "Bearer AAAAAAAAAAAAAAAAAAAAAO0%2BbgEAAAAAmSn39Dd9UfVsr%2BQO4YLkmM5%2FLoM%3DFQq3796BMb7rKkwcG9YjQLmGotLZidlFGMt9XkoFkT3FPztMTT";
    console.log("getting");
    axios.get(URL, 
      { headers: { Authorization:  BearerToken} })
      .then(response => {
        console.log(response.data);
        res.status(200).json({ text: response.data });
        
      })
      .catch((err)=>console.log(err));
  // res.status(200).json({ name: 'John Doe' });
}
