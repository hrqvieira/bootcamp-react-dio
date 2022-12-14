import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Buttom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin,  Title, TitleLogin, Wraper } from "./styles";
import {api} from '../../services/api'

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate();


  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async formData => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
         navigate('/feed')
      }else{  
        alert('Email ou senha invalido') 
      }
    }catch{
      alert('Houve um erro, tente novamente')
    }
  };
  
  
  return (
    <>
      <Header />
      <Container>
        <Column>
            <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
          <Wraper>
            <TitleLogin>Faça seu cadastro</TitleLogin>  
            <SubTitleLogin>Faça seu login e make change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
          <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password"leftIcon={<MdLock />}/>
          <Button title="Entrar" variant="secondary" type='submit'></Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wraper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
