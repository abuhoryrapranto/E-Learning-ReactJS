function MyCourseCard(props) {

    const cardStyle = {
        maxWidth: "700px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        borderRadius: "5px",
    };

    return (
        <div className="my-course" style={cardStyle}>
            <div className="pl-3 pr-3 pt-2 pb-2 mb-3">
                <div style={{"display": "inline"}}>
                    <div className="float-left">
                        <p className="text-xl text-emerald-600">{props.name}</p>
                        <p className="text-md text-fuchsia-700">{props.author}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xl text-emerald-600">{props.percentage}%</p>
                        <p className="text-md text-fuchsia-700">Done</p>
                    </div>
                </div>
                <div>
                    <hr className="mt-3 mb-2" />
                    <p className="text-sm text-slate-700">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default MyCourseCard;