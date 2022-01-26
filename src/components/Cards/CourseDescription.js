import { useState } from "react";
import Button from "../Buttons/LargeButton";
function CourseDescription(props) {

    const descriptionStyles = {
        maxWidth: "500px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        borderRadius: "10px",
    };

    const contentStyles = {
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        marginRight: "20px",
        padding: "10px 10px 10px 10px",
        marginTop: "10px",
        borderRadius: "5px",
        cursor: "pointer"
    }

    let [show, setShow] = useState({});
    //let [disp, setDisp] = useState("none");
    const showContent = (id) => {
        setShow(prev => ({
            ...prev,
            [id]: !prev[id]
          }));
    }

    return (
        <div className="course-description" style={descriptionStyles}>
            <img src={props.img} alt='' />
            <div className="pl-7 mt-5">
                <p className="text-3xl font-bold text-pink-500">{props.name}</p>
                <p className="text-lg text-gray-700 font-semibold mt-3">{props.name ? "Contents" : ""}</p>
                {
                    props.content?.map(result => (
                        <div key={result.id}>
                            <div className="pl-3"  style={contentStyles} onClick={ ()=>showContent(result.id)}>
                                <span>{result.name}</span><span className="float-right">{result.duration}</span>
                            </div>
                            <div>
                                {show[result.id] ? <p>Source</p> : ""}
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                props.name ? <div className="flex items-center justify-center mb-3 mt-7">
                <Button name="Enroll" 
                    bgColor="bg-pink-500" 
                    textColor="text-white" 
                    fontWeight="font-bold"
                    textSize="text-md"
                    marginBottom="10px"
                />
            </div> : ""
            }
        </div>
    );
}

export default CourseDescription;