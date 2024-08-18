const { promises } = require('dns')
const fs = require('fs')

function writeDateToFile(filename,content){
    fs.writeFileSync(filename,JSON.stringify(content), 'utf-8',(err) =>{
        if (err){
            console.log(err)
        }
    } )
}

function getPostData(req){
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunck) => {
                body += chunck.toString()
            })

            req.on('end', ()=> {
                resolve(body)
            })

        } catch (error) {
            reject(error)
        }
    })

}

module.exports = {
    writeDateToFile,
    getPostData,
}