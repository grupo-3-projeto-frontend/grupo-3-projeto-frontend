import styled from "styled-components";
import MainStyledContainer from "../../components/MainContainer/style";

export const StyledDashContainer = styled(MainStyledContainer)`
  height: 100vh;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(102, 188, 230, 1) 0%,
    rgba(169, 149, 232, 1) 100%
  );
`;

export const StyledContent = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  .h2Solicitation {
    color: var(--color-gray0);
  }

  .divDate {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ul {
      width: 100%;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 2em;
      padding-bottom: 2em;

      @media (max-width: 1045px) {
        height: 90%;
        width: 100%;
        justify-content: center;
      }
    }

    .h2Solicitation {
      width: 100%;
      padding-bottom: 20px;
      text-align: center;
      color: var(--color-gray0);
      font-size: var(--title-size7);
      font-family: var(--font-family2);
    }
  }

  .divEdit {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (min-width: 700px) {
    top: 480px;
    width: 80%;
    .divEdit {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 850px) {
    width: 60%;
  }

  @media (min-width: 1050px) {
    position: static;
    width: 80%;
    max-width: 1200px;
    flex-direction: row;

    .divEdit {
      max-width: 250px;
      align-self: flex-start;
      flex-direction: column;
    }

    .divDate {
      align-items: flex-start;

      .h2Solicitation {
        text-align: left;
      }
    }
  }
`;
