const fs = require('fs');

const someOperation = () => {
    fs.readFile('input.txt', 'utf8', (error, data) => {
        if(error) {
            console.log("Error in reding the file", error);
            return;
        }

        const convertIntoUpperCase = data.toUpperCase();

        fs.writeFile('output.txt', convertIntoUpperCase, (error) => {
            if(error) {
                console.log("Error in writing the file", error);
                return;
            }
            console.log("Sucess!");
        });
    })
}

someOperation();