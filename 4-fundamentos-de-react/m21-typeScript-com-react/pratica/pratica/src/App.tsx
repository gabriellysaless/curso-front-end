import { useEffect, useState } from 'react';
import type { Book } from './types/Book';
import { getBooks, addBook, deleteBook } from './services/api';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleAdd = async (book: Book) => {
    const newBook = await addBook(book);
    setBooks((prev) => [...prev, newBook]);
  };

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    setBooks((prev) => prev.filter((b) => b._id !== id));
  };

  return (
    <Container>
      <Title>📚 Catálogo de Livros</Title>
      <BookForm onAdd={handleAdd} />
      <BookList books={books} onDelete={handleDelete} />
    </Container>

  );
}

export default App;
