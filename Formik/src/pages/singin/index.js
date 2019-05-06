import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import api from "../../services/api";

// import { Container } from './styles';
const SingIn = ({ errors, handleSubmit, handleChange, values }) => (
  <form onSubmit={handleSubmit}>
    <input
      placeholder="Nome"
      type="text"
      name="nome"
      onChange={handleChange}
      values={values.nome}
    />

    { !!errors.nome && <span>{errors.nome} </span> }

    <input
      placeholder="Sobrenome"
      type="text"
      name="sobrenome"
      onChange={handleChange}
      values={values.sobrenome}
    />
    <input
      placeholder="CPF (000.000.000-00)"
      type="text"
      name="cpf"
      onChange={handleChange}
      values={values.cpf}
    />
    <input
      placeholder="Email"
      type="email"
      name="email"
      onChange={handleChange}
      values={values.email}
    />
    { !!errors.email && <span>{errors.email} </span> }
    <input
      placeholder="Login"
      type="text"
      name="login"
      onChange={handleChange}
      values={values.login}
    />
    <input
      placeholder="Senha"
      type="password"
      name="password"
      onChange={handleChange}
      values={values.password}
    />
    <input
      placeholder="Comfirmar senha"
      type="password"
      name="confirm_password"
      onChange={handleChange}
      values={values.confirm_password}
    />

    <button type="submit"> Cadastrar </button>
  </form>
);

export default withFormik({
  mapPropsToValues: () => ({
    nome: "",
    email: "",
    sobrenome: "",
    login: "",
    password: "",
    confirm_password: "",
    cpf: ""
  }),

  validateOnBlur: false,
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório!"),
    sobrenome: Yup.string().required("Campo obrigatório!"),
    cpf: Yup.string().required("Campo obrigratório!"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("Campo obrigatório!"),
    password: Yup.string().required("Campo obrigatório!"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required("Campo obrigatório!")
  }),

  handleSubmit: (values, { props }) => {
    const { id } = props.match.params;
    console.log(values);
    //api
    api.postOrPut("/", id, values);
  }
})(SingIn);
