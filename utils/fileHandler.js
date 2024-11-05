const fs = require('fs');
const path = require('path');

const filepath = './data/tasks.json';

 exports.writeTasksTofile = (Tasks) => {
    fs.writeFileSync(filepath, json.stringify(Tasks))
}

exports.readTasksfromfile = () =>{ 
    if(!fs.existsSync(filepath)) {
        writeTasksTofile([])
    }

    const data = fs.readfilesync(filepath);
    return json.parse(data)
}
