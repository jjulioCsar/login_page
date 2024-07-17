import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Background color of the container */
`;


const Content = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 700px;
  width: 600px;
`;

function ContainerLogin() {
  return (
    <StyledContainer>
      <Content>
        {/* Your login form or content goes here */}
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
          </div>
          <button type="submit" className="btnEntrar">Entrar</button>
        </form>
      </Content>
    </StyledContainer>
  );
}

export default ContainerLogin;
