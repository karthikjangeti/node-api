const app = require('express')();
const bodyParser = require('body-parser');
//const app = express();
app.use(bodyParser.json());

app.get("/api",(req,res)=>{
    res.status(200).json({message:"hello karthik!"});
});

app.listen(4000, ()=>console.log('server started on port 4000'));