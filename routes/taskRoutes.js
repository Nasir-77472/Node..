const { json } = require("stream/consumers");
const { getTasks } = require("../controllers/taskcontrolles");

const taskRoutes = (req, res) => { 
    if(req,method == 'GET'){
        getTasks(req,res);
    }else if(req.mothod == 'post'){
        createTask(req, res)
    }else if (req.method == 'PATCH') {
        updateTask(req.res )
    
        
    }else {
        res.writeHead(404, 'Date Note found', {'content-type': 'application/json'})
        res.end(json.stringify({
            message: "Uknown method required."

        }))
    }
}

module.exports = taskRoutes;