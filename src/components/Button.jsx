import "../style/button.css";


const Button = ({ onClick, children, disabled }) => (
    <button className="button" onClick={onClick} disabled={disabled}> {children} </button>
);
export default Button;