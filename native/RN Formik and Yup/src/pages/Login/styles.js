import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

export const BoxBottom = styled.View`
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-horizontal: 15px;
`;

export const BoxBottom2 = styled.View`
  margin-top: 65px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-horizontal: 15px;
`;

export const Form = styled.View`
  margin-vertical: 15px;
  margin-horizontal: 15px;
`;

export const Login = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #353c72;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  opacity: ${props => (props.disabled ? "0.5" : "1.0")};
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 45px;
  color: #353c72;
  margin-bottom: 35px;
  font-family: "Baloo Regular";
`;

export const Error = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #f00;
`;

export const TextButton = styled.Text`
  font-size: 24px;
  color: #353c72;
  font-family: "Baloo Regular";
`;

export const Span = styled.Text`
  font-size: 14px;
  color: #353c72;
  font-family: "Baloo Regular";
`;

export const InputEmail = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.error ? "#f00" : "#aaa")};
  height: 50px;
`;

export const InputPassword = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.error ? "#f00" : "#aaa")};
  height: 50px;
`;
