const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if(err) throw err
    console.log('Folder created')
})

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world',
    (err) => {
        if(err) throw err 
        console.log('File created')

        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            'From append file',
            err => {
                if (err) throw err
                console.log('File changet')

                fs.readFile(
                    path.join(__dirname, 'notes', 'mynote.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err
                        console.log(data)
                    }
                )
            }
        )
    }
)

fs.rename(
    path.join(__dirname, 'notes', 'mynote.txt'),
    path.join(__dirname, 'notes', 'note.txt'),
    err => {
        if (err) throw err
        console.log('File rename')
    }
)