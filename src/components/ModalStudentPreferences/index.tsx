import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledModalStudentPreferences } from "./style";
import { editPrefStudentSchema } from "./editPrefStudentSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledModalContainer } from "../ModalContainer/style";

interface iEditPreferencesStudent {
  email: string;
  password: string;
  bio: string;
  photo_url: string;
  school_year_preference: string[];
  grades: string[];
  type: string;
}

export const ModalStudentPreferences = ({ closeModal }: any) => {
  const { editProfile, globalLoading, modalLoading, setModalLoading } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditPreferencesStudent>({
    mode: "onBlur",
    resolver: yupResolver(editPrefStudentSchema),
  });

  const submit = (data: iEditPreferencesStudent) => {
    const userId = localStorage.getItem("@USERID");
    editProfile(data, userId);
  };

  if (!modalLoading) {
    closeModal();
    setModalLoading(true);
  }

  return (
    <StyledModalContainer>
      <StyledModalStudentPreferences>
        <div className="modalStudentBox">
          <Form onSubmit={handleSubmit(submit)}>
            <div className="modalStudentPrefHeader">
              <h2>Editar preferĂȘncia</h2>
              <Button onClick={closeModal} type="button">
                X
              </Button>
            </div>
            <div className="modalSchoolPreference">
              <h3>PreferĂȘncia de escolaridade</h3>
              <div className="modalSchoolPrefCheckbox">
                <div>
                  <Input
                    id="1"
                    label="Ensino fundamental I"
                    type="checkbox"
                    register={register("school_year_preference")}
                    value={"Ensino fundamental I"}
                  />
                </div>
                <div>
                  <Input
                    id="2"
                    label="Ensino fundamental II"
                    type="checkbox"
                    register={register("school_year_preference")}
                    value={"Ensino fundamental II"}
                  />
                </div>
                <div>
                  <Input
                    id="3"
                    label="Ensino medio"
                    type="checkbox"
                    register={register("school_year_preference")}
                    value={"Ensino mĂ©dio"}
                  />
                </div>
                {errors.school_year_preference?.message && (
                  <p className="erroYupSchool">
                    {errors.school_year_preference.message}
                  </p>
                )}
              </div>
              <hr />
            </div>
            <div className="modalStudentGrades">
              <h3>Escolha de matĂ©rias</h3>
              <div className="modalStudentGradesCheckbox">
                <div>
                  <Input
                    id={"gradeSpanish"}
                    hidden={false}
                    value={"Espanhol"}
                    label={"Espanhol"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeEnglish"}
                    hidden={false}
                    value={"InglĂȘs"}
                    label={"InglĂȘs"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeSociology"}
                    hidden={false}
                    value={"Sociologia"}
                    label={"Sociologia"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradePhilosophy"}
                    hidden={false}
                    value={"Filosofia"}
                    label={"Filosofia"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeHistory"}
                    hidden={false}
                    value={"HistĂłria"}
                    label={"HistĂłria"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeGeography"}
                    hidden={false}
                    value={"Geografia"}
                    label={"Geografia"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeBiology"}
                    hidden={false}
                    value={"Biologia"}
                    label={"Biologia"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradePhysics"}
                    hidden={false}
                    value={"FĂ­sica"}
                    label={"FĂ­sica"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeChemistry"}
                    hidden={false}
                    value={"QuĂ­mica"}
                    label={"QuĂ­mica"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeScience"}
                    hidden={false}
                    value={"CiĂȘncias"}
                    label={"CiĂȘncias"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeArts"}
                    hidden={false}
                    value={"Arte"}
                    label={"Arte"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeMath"}
                    hidden={false}
                    value={"MatemĂĄtica"}
                    label={"MatemĂĄtica"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradePortuguese"}
                    hidden={false}
                    value={"PortuguĂȘs"}
                    label={"PortuguĂȘs"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
                <div>
                  <Input
                    id={"gradeEssay"}
                    hidden={false}
                    value={"RedaĂ§ĂŁo"}
                    label={"RedaĂ§ĂŁo"}
                    type={"checkbox"}
                    register={register("grades")}
                  />
                </div>
              </div>
              {errors.grades?.message && (
                <p className="erroYupGrades">{errors.grades.message}</p>
              )}
              <div className="modalStudentPrefButtons">
                <Button onClick={closeModal} type="button">
                  Cancelar
                </Button>
                <Button disabled={globalLoading} type="submit">
                  {globalLoading ? "Salvando..." : "Salvar alteraĂ§Ă”es"}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </StyledModalStudentPreferences>
    </StyledModalContainer>
  );
};
