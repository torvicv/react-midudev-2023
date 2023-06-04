function Button({text, buttonClassName, handleClick}) {
    return (
        <button onClick={handleClick} className={buttonClassName}>
            <span className="follow">{text}</span>
            <span className="not-follow">Dejar de seguir</span>
        </button>
    );
}

export default Button;