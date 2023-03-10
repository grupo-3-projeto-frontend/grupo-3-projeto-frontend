import styled from "styled-components";
import { StyledFormContainer } from "../../components/FormContainer/style";

const StyledRegisterContainer = styled(StyledFormContainer)`
  & p {
    font-size: var(--text-size7);
    font-weight: bold;
  }

  & span {
    padding: 5px 0;
    display: block;
    font-size: var(--text-size8);
    font-weight: bold;
    color: var(--color-tertiary);
  }

  & p.warning {
    padding: 20px 0;
    font-size: var(--text-size8);
    color: var(--color-gray300);
  }

  @media (min-width: 600px) {
    padding: 40px 50px;
  }

  @media (min-width: 700px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    width: 50vw;
    height: 80%;
    align-self: center;
  }

  @media (min-width: 1100px) {
    width: 40vw;
  }

  @media (min-width: 1400px) {
    width: 35vw;
  }
`;

export default StyledRegisterContainer;
