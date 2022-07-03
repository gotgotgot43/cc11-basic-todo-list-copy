function Button(props) {
    const classes = `btn btn-${props.color ?? 'primary'} shadow-none`;
    return (
        <button className={classes} type="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
}
export default Button;
