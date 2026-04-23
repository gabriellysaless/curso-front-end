import type { Book } from '../types/Book';
import styled from 'styled-components';

const Card = styled.li`
  list-style: none;
  background: #fff;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.strong`
  font-size: 16px;
`;

const Author = styled.span`
  font-size: 14px;
  color: #666;
`;

const Status = styled.span<{ status: string }>`
  font-size: 12px;
  color: ${({ status }) => (status === 'Lido' ? 'green' : 'orange')};
`;

const DeleteButton = styled.button`
  padding: 8px 12px;
  border: none;
  background: #ef4444;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`;

type Props = {
  book: Book;
  onDelete: (id: string) => void;
};

const BookItem = ({ book, onDelete }: Props) => {
  return (
    <Card>
      <Info>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
        <Status status={book.status}>{book.status}</Status>
      </Info>

      <DeleteButton onClick={() => onDelete(book._id!)}>
        Remover
      </DeleteButton>
    </Card>
  );
};

export default BookItem;
