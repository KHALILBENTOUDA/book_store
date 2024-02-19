import React from 'react'
import Book_page from '../../components/Books/Book'
import Dsescriptin from '../../components/Books/description'
import All_books from '../../components/Books/All_books'
import BooksList from '../../components/Books/BooksList'

const SingleBookPage = () => {
  return (
   <>
      <Book_page/>
      <Dsescriptin/>
      <BooksList title={"Related books"} />
   </>
  )
}

export default SingleBookPage