import { SubTitle } from "../../../styles/globalStyledComponents";
import { useState } from "react";
import { Box, Grid, TextField, Typography, Button, Chip } from "@mui/material";
/* import { useForm } from "react-hook-form"; */

/* import { LinkComponent } from "../../components/ui";
import { validations } from "../../utils"; */
import { ErrorOutline } from "@mui/icons-material";

type FormData = {
  email: string;
  password: string;
};
export const ContactForm = () => {
  /* const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();
 */
  const [showError, setShowError] = useState(false);

  const onLoginUser = async ({ email, password }: FormData) => {
    /* const isValidLogin = await loginUser(email, password);

      if (!isValidLogin) {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
        return;
      }

      router.replace("/"); */
  };
  return (
    <section id="contact">
      <Container>
        <SubTitle>Contacto</SubTitle>
        <form /* onSubmit={handleSubmit(onLoginUser)} */ noValidate>
          <Box sx={{ width: 350, padding: "10px 20px" }}>
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                display="flex"
                flexDirection="column"
                alignItems="center"
              ></Grid>

              <Grid item xs={12}>
                <TextField
                  autoFocus
                  color="secondary"
                  type="text"
                  label="Nombre"
                  fullWidth
                  inputRef={(input) => input?.focus()}

                  /* {...register("password", {
                    required: "Required field",
                    minLength: {
                      value: 6,
                      message: "Password requires min 6 characters",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message} */
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  fullWidth
                  /* {...register("email", {
                    required: "Required field",
                    validate: validations.isEmail,
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message} */
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Mensaje"
                  size="medium"
                  fullWidth
                  multiline
                  rows={4}
                  /* {...register("password", {
                    required: "Required field",
                    minLength: {
                      value: 6,
                      message: "Password requires min 6 characters",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message} */
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="secondary"
                  className="circular-btn"
                  size="large"
                  fullWidth
                >
                  Enviar
                </Button>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="end"></Grid>
              <Grid
                item
                xs={12}
                sx={{ minHeight: 60 }}
                display="flex"
                justifyContent="center"
              >
                {showError ? (
                  <Chip
                    label="Credentials error"
                    color="error"
                    icon={<ErrorOutline />}
                    className="fadeIn"
                  />
                ) : null}
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </section>
  );
};

import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
