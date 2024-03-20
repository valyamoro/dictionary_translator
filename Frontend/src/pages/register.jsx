import { Button, TextField, Checkbox } from "@mui/material";
import "../styles/register.css";

export default function Register() {
  let labelsTextType = ["Отображаемое имя", "Логин"];
  let labelsPasswordType = ["Пароль", "Подтверждение пароля"];

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="register-field">
            <header className="header">
              <div className="header-title">
                <h1>Регистрация</h1>
                <p>
                  Уже зарегистрированы? <a href="#">Войти</a> в аккаунт
                </p>
              </div>
            </header>

            <form method="post" className="input-field">
              {labelsTextType.map((elememt, index) => (
                <TextField
                  size="small"
                  label={labelsTextType[index]}
                  variant="outlined"
                  type="text"
                  className="text-field"
                />
              ))}

              {labelsPasswordType.map((element, index) => (
                <TextField
                  size="small"
                  label={labelsPasswordType[index]}
                  variant="outlined"
                  type="password"
                  className="text-field"
                />
              ))}

              <div className="input-accept-rules">
                <Checkbox
                  sx={{
                    border: "none",
                    borderRadius: "0.25rem",
                    textAlign: "none",
                    alignItems: "none",
                  }}
                />
                <p>
                  Согласие с <a>правилами ресурса</a>
                </p>
              </div>

              <Button
                sx={{
                  background: "#7c2d12",
                  height: "44px",
                  width: "320px",
                  borderRadius: "0.375rem",
                  color: "rgba(203, 213, 225, 1)",
                  textTransform: "none",
                  border: "1px solid #E6563D",
                  "&:hover": { background: "#E6563D" },
                }}
                variant="contained"
              >
                Создать аккаунт
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
