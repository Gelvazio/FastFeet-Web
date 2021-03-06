import styled from 'styled-components';

export const Container = styled.div`
  width: 988px;
  height: calc(100% - 64px);
  margin: 0 auto;

  form {
    label {
      color: ${props => props.theme.colors.textPrimary};
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 9px;
    }

    input {
      width: 100%;
      height: 45px;
      border: 1px solid ${props => props.theme.colors.primaryColor};
      border-radius: 4px;
      font-size: 16px;
      color: ${(props) => props.theme.colors.textSecondary};
      font-weight: 500;
      padding-left: 15px;
    }
  }
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
