var mylibrary = require('./library/datelibrary')

function useImportedLibrary(){
    console.log(mylibrary.getCurrentDate())
    console.log(mylibrary.getCurrentDay())
    console.log(mylibrary.getCurrentTime())
}

useImportedLibrary()