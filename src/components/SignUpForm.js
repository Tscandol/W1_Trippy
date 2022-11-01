import "./SignUpFormStyles.css";

function SignUpForm() {
    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form>
                <input placeholder="Email" />
                <input placeholder="Password" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SignUpForm;
