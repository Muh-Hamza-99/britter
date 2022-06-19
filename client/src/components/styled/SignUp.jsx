import StyledSignUp, { SignUpButton } from "./SignUp.Styled";

const SignUp = () => {
  const handleSignUp = event => {
      event.preventDefault();
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