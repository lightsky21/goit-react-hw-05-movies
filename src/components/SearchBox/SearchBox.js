import { Form, Input, FormBtn } from './SearchBox.styled';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const input = useRef();

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      input.current.value = query;
    }
  }, [searchParams]);
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.input.value.trim();
    query ? setSearchParams({ query }) : setSearchParams({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="input"
        autocomplete="off"
        autoFocus
        ref={input}
      />

      <FormBtn type="submit"> Search</FormBtn>
    </Form>
  );
};
