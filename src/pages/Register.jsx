import { useNavigate } from "react-router"

const Register = () => {

    const navigate = useNavigate()
  return (
    <>
        <div>Register</div>
        <button onClick={() => navigate(-1)}>Regresar</button>
    </>
  )
}

export default Register