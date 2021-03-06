import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import * as Yup from "yup";
import { ActivityIndicator, Alert } from "react-native";

import {
  Container,
  Title,
  Form,
  InputEmail,
  InputPassword,
  Login,
  TextButton,
  BoxBottom,
  BoxBottom2,
  Button,
  Span,
  Error
} from "./styles";

export default function Loginn(props) {
  const [loading, setLoading] = useState(false);

  function handleLogin(values) {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }

  useEffect(
    funcao, []
  )

  async function funcao() {
    setLoading(false);
  }

  const Validation = Yup.object().shape({
    email: Yup.string()
      .email("E-mail inválido")
      .required("Campo obrigatório!"),
    password: Yup.string().required("Campo obrigatório!")
  });

  return (
    <Container>
      <Formik
        validationSchema={Validation}
        validateOnBlur={true}
        validateOnChange={!false}
        initialValues={{ email: "", password: "" }}
        onSubmit={values => handleLogin(values)}
        render={({ values, handleSubmit, handleChange, errors, isValid, handleBlur, touched }) => (
          <>
            <Title> Bem Vindo! </Title>
            <Form>
              <InputEmail
                onBlur={handleBlur("email")}
                error={errors.email && touched.email}
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                value={values.email}
                placeholder="Email"
                placeholderTextColor="#18438b"
              />
              {(!!errors.email && !!touched.email) && <Error> {errors.email} </Error>}
              <InputPassword
                onBlur={handleBlur("password")}
                error={errors.password && touched.password}
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                value={values.password}
                placeholder="Password"
                placeholderTextColor="#18438b"
                secureTextEntry
                style={{ marginTop: 15 }}
              />
              {(!!errors.password && touched.password) && <Error> {errors.password} </Error>}
            </Form>
            <BoxBottom>
              <TextButton> Login </TextButton>
              <Login onPress={handleSubmit} disabled={!isValid}>
                {loading ? (
                  <ActivityIndicator size={22} color="#fff" />
                ) : (
                    <Icon name="arrow-right" size={22} color="#fff" />
                  )}
              </Login>
            </BoxBottom>
          </>
        )}
      />
      <BoxBottom2>
        <Button>
          <Span> Registre-se</Span>
        </Button>
        <Button>
          <Span> Esqueceu a senha? </Span>
        </Button>
      </BoxBottom2>
    </Container>
  );
}

/* import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  Title,
  Form,
  Input,
  Login,
  TextButton,
  BoxBottom,
  BoxBottom2,
  Button,
  Span
} from "./styles";

export default function Loginn() {
  const [data, setData] = useState({ email: "", password: "" });

  function handleLogin() {
    console.log(data);
  }

  return (
    <Container>
      <Title> Bem Vindo! </Title>
      <Form>
        <Input
          value={data.email}
          placeholder="Email"
          placeholderTextColor="#18438b"
          style={{ marginBottom: 25 }}
          onChangeText={email => {
            setData({ ...data, email });
          }}
        />
        <Input
          value={data.password}
          placeholder="Password"
          placeholderTextColor="#18438b"
          secureTextEntry
          onChangeText={password => {
            setData({ ...data, password });
          }}
        />
      </Form>
      <BoxBottom>
        <TextButton> Login </TextButton>
        <Login onPress={handleLogin}>
          <Icon name="arrow-right" size={22} color="#fff" />
        </Login>
      </BoxBottom>

      <BoxBottom2>
        <Button>
          <Span> Registre-se</Span>
        </Button>
        <Button>
          <Span> Esqueceu a senha? </Span>
        </Button>
      </BoxBottom2>
    </Container>
  );
}
 */
