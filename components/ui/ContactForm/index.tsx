import { useState } from "react";
import axios from "axios";
import { Box, Grid, TextField, Button, Chip, Divider } from "@mui/material";
import styled from "styled-components";

import { SubTitle } from "../../../styles/globalStyledComponents";
import { SocialNetworkContainer } from "../DescriptionProfile";

import { Linkedin } from "../icons/Linkedin";
import { Twitter } from "../icons/Twitter";
import { GitHubIcon } from "../icons/Github";

import { useForm } from "react-hook-form";

import { ErrorOutline, ThumbUpRounded } from "@mui/icons-material";

import { isEmail } from "../../../utils/validations";
import useAutoFocus from "../../../hook/useAutoFocus";

type FormData = {
  email: string;
  text: string;
};
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { autoFocus } = useAutoFocus();

  const [showError, setShowError] = useState(false);
  const [showOkey, setShowOkey] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const sendEmail = async ({ email, text }: FormData) => {
    const isSend = await axios.post("/api/contactme", {
      from: email,
      text,
    });

    if (!isSend) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    setEmailInput("");
    setTextInput("");
    setShowOkey(true);
    setTimeout(() => setShowOkey(false), 2000);
    return;
  };

  return (
    <section id="contact">
      <Container>
        <SubTitle>Contacto</SubTitle>
        <form onSubmit={handleSubmit(sendEmail)} noValidate>
          <Box sx={{ width: 350, padding: "10px 20px" }}>
            <Grid container spacing={4}>
              {/*   <Grid item xs={12}>
                <TextField
                  autoFocus
                  color="secondary"
                  type="text"
                  label="Nombre"
                  fullWidth
                  inputRef={(input) => input?.focus()}

                  {...register("password", {
                    required: "Campo requerido.",
                    minLength: {
                      value: 6,
                      message: "Password requires min 6 characters",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  fullWidth
                  {...register("email", {
                    required: "Campo requerido.",
                    validate: isEmail,
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  autoFocus={autoFocus}
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
                  {...register("text", {
                    required: "Campo requerido.",
                    minLength: {
                      value: 10,
                      message: "se requiere un texto de 10 caracteres",
                    },
                  })}
                  error={!!errors.text}
                  helperText={errors.text?.message}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
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
                sx={{ minHeight: 80, marginBottom: "6px" }}
                display="flex"
                justifyContent="center"
              >
                {showError ? (
                  <Chip
                    label="Ocurrió un error"
                    color="error"
                    icon={<ErrorOutline />}
                    className="fadeIn"
                  />
                ) : null}
                {showOkey ? (
                  <Chip
                    label="Su correo fue enviado, Muchas gracias!"
                    color="success"
                    icon={<ThumbUpRounded />}
                    className="fadeIn"
                  />
                ) : null}
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
      <Divider role="presentation">Redes sociales</Divider>
      <SocialNetworkContainer>
        <Linkedin fill="#0a66c2" fillHover="#0a66da" />
        <GitHubIcon href={"https://github.com/JAFleitas"}/>
        <Twitter fill="#0f89e3" fillHover="#33c5ff" />
      </SocialNetworkContainer>
    </section>
  );
};

const Container = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
