import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate()
  return (
    <>
    <div>Login</div>
        <button onClick={() => navigate(-1)}>
      Regresar
    </button>
    </>
  )
}

export default Login