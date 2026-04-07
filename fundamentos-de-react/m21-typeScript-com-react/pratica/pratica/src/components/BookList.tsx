import type { Book } from '../types/Book';
import BookItem from './BookItem';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
`;

type Props = {
  books: Book[];
  onDelete: (id: string) => void;
};

const BookList = ({ books, onDelete }: Props) => {
  return (
    <List>
      {books.map((book) => (
        <BookItem key={book._id} book={book} onDelete={onDelete} />
      ))}
    </List>
  );
};

export default BookList;
