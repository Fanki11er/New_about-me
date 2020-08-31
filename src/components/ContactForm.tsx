import React, { useState } from "react";
import styled, { ThemeProps } from "styled-components";
import { Formik, Form, Field, FormikErrors } from "formik";
import axios from "axios";
import AnimatedSubmitButton from "./AnimatedSubmitButton";
import { Status } from "../utils/types";

const FormWrapper = styled.div`
  min-width: 350px;
  width: 75%;
  height: 720px;

  @media screen and (max-width: 960px) {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  min-width: 400px;
  width: 60%;
  height: 60px;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 45px;
  margin-bottom: 20px;
  border: none;
  color: ${({ theme }) => theme.contact};
  font-size: ${({ theme }) => theme.fontSizes.M};
  font-weight: bold;
  padding: 0 25px;
  transition: color 0.5s;
  outline: none;
  transition: border 0.5s 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.transparentContact};
    transition: color 0.8s;
  }
  :focus {
    border: 2px solid ${({ theme }) => theme.turquoise};
    ::placeholder {
      color: transparent;
    }
  }

  :not(:placeholder-shown) + label {
    color: ${({ theme }) => theme.contact};
    transform: scale(1);
    sup {
      color: ${({ theme }) => theme.red};
    }
  }

  :focus + label {
    color: ${({ theme }) => theme.contact};
    transform: scale(1);
    sup {
      color: ${({ theme }) => theme.red};
    }
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.S};
    height: 50px;
  }
  @media screen and (max-width: 560px) {
    min-width: 320px;
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  margin-top: 10px;
`;

const TextAreaWrapper = styled(InputWrapper)`
  display: flex;
  height: 320px;
`;

const TextArea = styled(StyledInput)`
  height: 80% !important;
  width: 100%;
  display: block;
  padding: 25px 30px;
  border-radius: 30px;
  resize: none;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.S};
  font-weight: bold;
  color: ${({ theme }) => theme.contact};
  margin: 0 0 5px 25px;
  position: absolute;
  left: 0;
  top: 0;
  color: transparent;
  transform: scale(0.7);
  transition: transform 0.5s 0.2s, color 0.5s 0.2s;
  user-select: none;
`;

const Required = styled.sup`
  color: transparent;
  margin-left: 2px;
  transition: color 0.5s 0.2s;
`;

const Error = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.red};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.XS};
  left: 30px;
  bottom: -2px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  display: flex;
  background-color: transparent;
  border: none;
  margin-top: 50px;
  outline: none;
  user-select: none;
  border-radius: 16px;
  :hover {
    .buttonText {
      transition: fill 0.5s;
      fill: ${({ theme }) => theme.turquoise};
    }
  }
  @media screen and (max-width: 560px) {
    width: 150px;
    height: 50px;
  }
`;
interface ErrorProps {
  errorStatus: boolean;
}
const SendError = styled.div`
  color: ${(props: ErrorProps & ThemeProps<any>) =>
    props.errorStatus ? props.theme.red : "transparent"};
  font-size: ${({ theme }) => theme.fontSizes.XS};
  font-weight: bold;
  display: flex;
  margin-top: 20px;
  user-select: none;
  transition: color 1s 2.5s;
`;

interface MyFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const [status, setStatus] = useState<Status>("Wait");
  const [isErrorStatus, setIsErrorStatus] = useState(false);

  const validate = (values: MyFormValues) => {
    const errors = {} as FormikErrors<MyFormValues>;
    const { name, email } = values;

    if (!name.length) errors.name = "This field is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) && email.length)
      errors.email = "Invalid e-mail";

    return errors;
  };
  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validate={values => validate(values)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setStatus("Submitting");
          if (isErrorStatus) setIsErrorStatus(false);
          axios
            .post(
              "https://us-central1-dziedzic-about-me.cloudfunctions.net/sendEmail",
              values
            )
            .then(() => {
              setStatus("Ok");
              setSubmitting(false);
              resetForm();
            })
            .catch(err => {
              console.log(err);
              setStatus("Err");
              setIsErrorStatus(true);
              setTimeout(() => {
                setStatus("Wait");
                setSubmitting(false);
              }, 3000);
            });
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Field name="name">
              {({ field, meta, errors }) => (
                <InputWrapper>
                  <StyledInput
                    id={"name"}
                    type="text"
                    {...field}
                    placeholder="Name (required)"
                    className={
                      meta.error && meta.touched ? "withError" : undefined
                    }
                  />
                  <Label htmlFor={"name"}>
                    Name<Required>*</Required>
                  </Label>

                  {meta.touched && meta.error && <Error>{meta.error}</Error>}
                </InputWrapper>
              )}
            </Field>

            <Field name="email">
              {({ field, meta }) => (
                <InputWrapper>
                  <StyledInput
                    id={"email"}
                    type="e-mail"
                    {...field}
                    placeholder="E-mail"
                    className={
                      meta.error && meta.touched ? "withError" : undefined
                    }
                  />
                  <Label htmlFor={"email"}>E-mail</Label>
                  {meta.touched && meta.error && <Error>{meta.error}</Error>}
                </InputWrapper>
              )}
            </Field>
            <Field name="message">
              {({ field, meta }) => (
                <TextAreaWrapper>
                  <TextArea
                    as={"textarea"}
                    id={"message"}
                    type="message"
                    {...field}
                    placeholder="Your message"
                    className={meta.error ? "withError" : undefined}
                  />
                  <Label htmlFor={"message"}>Your message</Label>
                </TextAreaWrapper>
              )}
            </Field>
            <Button type={"submit"} disabled={isSubmitting}>
              <AnimatedSubmitButton status={status} />
            </Button>
            <SendError errorStatus={isErrorStatus}>Please try again</SendError>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default ContactForm;
