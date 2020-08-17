import React from "react";
import styled from "styled-components";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FormikErrors,
} from "formik";
import AnimatedSubmitButton from "./AnimatedSubmitButton";

const FormWrapper = styled.div`
  min-width: 350px;
  width: 75%;
  height: 550px;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  min-width: 300px;
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
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
`;

const TextAreaWrapper = styled(InputWrapper)`
  display: flex;
  height: 320px;
`;

const TextArea = styled(StyledInput)`
  height: 80%;
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
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {props => (
          <StyledForm>
            <Field name="name">
              {({ field, meta, errors }) => (
                <InputWrapper>
                  <StyledInput
                    id={"name"}
                    type="text"
                    {...field}
                    placeholder="Name *"
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
                    type="email"
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
            <Button onClick={() => props.handleSubmit()}>
              <AnimatedSubmitButton />
            </Button>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default ContactForm;
/*<SubmitButton>
              <svg width="323.593" height="98.973" viewBox="0 0 323.593 98.973">
                <path
                  id="SquareButton"
                  d="M205.989,30.674c19.026-.023,29.251.925,30.08,22.073.59,15.058.119,47.916.119,55.024s-4,21.993-19.994,21.549-263.009-.786-279.119-.251-22.312-8.6-23.618-15.459c-.887-4.654-.98-63.757.124-67.468s3.883-15.908,20.651-15.784S186.963,30.7,205.989,30.674Z"
                  transform="translate(87.226 -30.357)"
                  fill="#2e2d40"
                />
                <circle
                  id="RoundButton"
                  cx="80"
                  cy="80"
                  r="80"
                  fill="#2e2d40"
                />
              </svg>
            </SubmitButton> */

/*const SubmitButton = styled.button`
  width: 120px;
  height: 35px;
  border: none;
  background-color: transparent;

  :hover #SquareButton {
    opacity: 0;
  }
  :hover #RoundButton {
    opacity: 1;
    transform: scale(1) translate(87.226px, -30.357px);
  }
  svg {
    object-fit: cover;
  }

  #SquareButton,
  #RoundButton {
    transition: opacity 0.5s, transform 0.5s;
  }

  #RoundButton {
    opacity: 0;
    transform: scale(0.5) translate(87.226px, -30.357px);
    transform-origin: 50% 50%;
    stroke: 2px solid green, 2px solid green;
  }`; */
