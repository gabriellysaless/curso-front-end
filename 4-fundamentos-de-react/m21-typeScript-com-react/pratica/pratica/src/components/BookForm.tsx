import { useState } from 'react';
import type { Book, BookStatus } from '../types/Book';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #4f46e5;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

type Props = {
  onAdd: (book: Book) => void;
};

const BookForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState<BookStatus>('Não lido');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({ title, author, status });

    setTitle('');
    setAuthor('');
    setStatus('Não lido');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input 
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <Select 
        value={status}
        onChange={(e) => setStatus(e.target.value as BookStatus)}
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </Select >

      <Button  type="submit">Adicionar</Button >
    </Form>
  );
};

export default BookForm;
