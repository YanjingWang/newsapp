// rcc tab
import React, { Component } from 'react'
import loading from '../loading.gif';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="loading spinner" />
            </div>
        )
    }
}

//how to debug? ERROR in ./src/Components/Loading.js 6:0-42 Module not found: Error: Can't resolve '...srcloading.gif' in 'C:\Users\Ywang36\OneDrive - NYCDOE\Desktop\web dev bootcamp\newsapp\src\Components'
//1. check the path
//2. check the file name
//3. check the file extension
//4. check the file type
//5. check the file location
//6. check the file import/export
//7. check the file spelling
//8. check the file case sensitivity
//9. check the file permission
//10. check the file size
//11. check the file content
//12. check the file syntax
