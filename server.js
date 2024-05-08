const express = require('express')
const app = express()
const PORT = 8000

const tanks = {
    'rein': {
        'name': 'Reinhardt',
        'mainAbility': 'Rocket Hammer',
        'secondaryAbility': 'Barrier Field',
        'mainCounter': 'Orisa'
    },
    'winton': {
        'name': 'Winston',
        'mainAbility': 'Tesla Cannon',
        'secondaryAbility': 'Tesla Cannon Alt Fire',
        'mainCounter': 'Orisa'
    },
    'hog': {
        'name': 'Roadhog',
        'mainAbility': 'Scrap Gun',
        'secondaryAbility': 'Take a Breather',
        'mainCounter': 'Orisa' 
    },
    'sig': {
        'name': 'Sigma',
        'mainAbility': 'Hyperspheres',
        'secondaryAbility': 'Experimental Barrier',
        'mainCounter': 'Orisa'
    },
    'unknown': {
        'name': 'unknown',
        'mainAbility': 'unknown',
        'secondaryAbility': 'unknown',
        'mainCounter': 'Orisa'
    }
}


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const tankName = req.params.name.toLowerCase()
    if(tanks[tankName]) {
        res.json(tanks[tankName])
    }else{
        res.json(tanks['unknown'])
    }

    res.json(tanks)
})

app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT}.`)
})