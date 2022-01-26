import classnames from 'classnames';

function LargeButton(props) {
    const styleClass = classnames(
        "px-20 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        props.bgColor,
        props.textColor,
        props.float,
        props.fontWeight,
        props.textSize,
        "hover:bg-green-500",
    );
    return (
    <button className={styleClass} type="button" onClick={props.click} style={{"marginBottom": props.marginBottom}}>
        {props.name}
    </button>
    );
}

export default LargeButton;