import StyledSignUp, { SignUpButton } from "./styled/SignUp.styled";

const SignUp = () => {
  const handleSignUp = event => {
      event.preventDefault();
      const str = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
      window.open(str, "_self");
  };
  return (
    <StyledSignUp>
        <form action="" onSubmit={event => handleSignUp(event)}>
            <div>
                <h1>Social Media App</h1>
                <sub>Created By Muhammad Hamza</sub>
            </div>
            <SignUpButton><p>Sign Up With Google</p> <i className="fa-brands fa-google"></i></SignUpButton>
        </form>
    </StyledSignUp>
  );
};

export default SignUp