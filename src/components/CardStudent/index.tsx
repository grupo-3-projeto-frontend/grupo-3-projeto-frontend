import { StyledCard } from "./style";
import andreaStudent from "../../assets/img/andreaStudent.png";
import { Button } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export interface imessageInfo {
  message: string;
  title: string;
  email: string;
  name: string;
  grades: string;
  teacher_id?: number;
  userId?: number;
}

export const CardStudent = ({ data, setDataStudent }: any) => {
  const { setModalStudant } = useContext(UserContext);
  const getData = () => {
    setDataStudent({
      name: data.name,
      email: data.email,
      grades: data.grades,
      title: data.title,
      message: data.message,
    });
    setModalStudant(true);
  };
  return (
    <StyledCard>
      <div>
        <img src={andreaStudent} alt="Foto do estudante" />
      </div>
      <div className="dataUser">
        <h3>{data.name}</h3>
        <span>{data.email}</span>
        <span>{data.grades}</span>
        <h3>{data.title}</h3>
        <p>{data.message}</p>
        <p className="messageStudent">{""}</p>
        <div className="containerButton">
          <Button
            buttonVariation="showMore"
            type={"button"}
            onClick={() => getData()}
          >
            Mostrar mais
          </Button>
        </div>
      </div>
    </StyledCard>
  );
};
