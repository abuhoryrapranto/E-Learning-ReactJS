import classnames from 'classnames';

function SmallButton(props) {
    const styleClass = classnames(
        "px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        props.bgColor,
        props.textColor,
        props.float,
        props.fontWeight,
        props.textSize
    );
    return (
    <button className={styleClass} type="button" onClick={props.click}>
        {props.name}
    </button>
    );
}

export default SmallButton;