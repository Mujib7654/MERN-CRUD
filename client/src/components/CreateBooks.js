import React from 'react'

const CreateBooks = () => {
    const formFieldSet = {
        width : '300px',
        padding : '10px',
        margin : 'auto',
        borderRadius : '10px'
    }
    return (
        <div>
            <fieldset style={formFieldSet}>
                <legend>Add books</legend>
                <tr>
                    <td>
                        Book Name
                    </td>
                    <td>
                        <input type='text' name='book_name'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Book Author
                    </td>
                    <td>
                        <input type='text' name='book_author'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Book Price
                    </td>
                    <td>
                        <input type='integer' name='book_price'/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} align='center'>
                        <input type='button' value={'Add Book'} name='AddBook'/>
                    </td>
                </tr>
            </fieldset>
        </div>
    )
}

export default CreateBooks