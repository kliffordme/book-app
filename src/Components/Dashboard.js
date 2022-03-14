import React, { useState } from 'react'
import { books } from './Books'

export const Dashboard = () => {

    const [currentBook, setCurrentBook] = useState([])

    const onClick = (id) => {
        const data = books.filter((book)=> {return book.id === id})
        setCurrentBook(data)

    }


  return (
    <div>
        Please select a book:
        <div>
            {books.map((book)=> (
                <div key={book.id}>
                <button style={{cursor: 'pointer'}} onClick={()=>onClick(book.id)}>{book.name}</button>

                </div>
            ) )}
            
            {currentBook.map((currBook)=>(
                <div key={currBook.id}>
                    <h3>
                    {currBook.name}
                    </h3>
                    {currBook.content}
                </div>
            ))}
        </div>
    </div>
  )
}
