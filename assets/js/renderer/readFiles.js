const convertAll = document.getElementById('convert-all')
const selectedFile = document.getElementById('selected-file')
const convertedFile = document.getElementById('converted-file')

var fs = require('fs')
var path = require('path')

function insertPath(filePath){
    convertedFile.append(filePath)
    convertedFile.append('\n')
}

function fileDisplay(filePath){
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            files.forEach(function(filename){
                var filedir = path.join(filePath,filename);
                
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.warn('get stats error');
                    }else{
                        var isFile = stats.isFile();
                        var isDir = stats.isDirectory();
                        if(isFile){
                            console.log(filedir);
                            insertPath(filename);
                        }
                        if(isDir){
                            fileDisplay(filedir); 
                        }
                    }
                })
            });
        }
    });
}

convertAll.addEventListener('click', (event) => {
    var floderPath = selectedFile.innerText
    // alert(floderPath)
    fileDisplay(floderPath)

})

