import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 79px;
  box-shadow: #00000033 0 0 5px;

  .active {
    button {
      background-color: #167abc;
      color: #fff;
    }
  }

  ul {
    display: flex;
    width: 100%;
    list-style: none;
  }
  li {
    margin: 0 4px;
    width: 100%;
  }
  button {
    border: none;
    border-radius: 4px;
    width: 32px;
    height: 32px;
  }
`;
