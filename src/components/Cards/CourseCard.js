import { Link } from "react-router-dom";

function courseCard(props) {
    const styles = {
        height: "180px",
        width: "330px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        borderRadius: "10px",
        cursor: "pointer"
    };

    return (
            <Link to={"/course/" + props.slug}>
                <div style={styles}>
                    <img className='mt-2' src={props.img_src} alt='' />
                    <hr className="mt-2" />
                    <div className='info mt-2 pl-3'>
                        <div className="float-left max-w-xs">
                            <p className='font-bold text-emerald-500'>{props.name}</p>
                            <p className='text-sm font-bold text-gray-700'>{props.author}</p> 
                        </div>
                        <div className="float-right mr-5">
                            <p className='font-bold text-orange-500'>BDT</p>
                            <p className='text-sm font-bold text-fuchsia-500'>{props.price}</p> 
                        </div>
                    </div>
                </div>
            </Link>
    );
}

export default courseCard;