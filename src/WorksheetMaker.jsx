import { useRef, useState } from "react";
import NavBarElement from "./components/navBar";

const SearchBarComponent = () => {
    const entryElement = useRef();
    const [Message, setMessage] = useState();
    const HandleClick = () => {
        setMessage("Your Download will Start Shortly")
        let topic = entryElement.current.value;
        fetch(`http://localhost:5000/api/worksheets?q=${encodeURIComponent(topic)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.blob(); // Convert response to a Blob
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${topic}_study_material.zip`; // Set download file name
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url); // Cleanup URL object
        })
        .catch(error => console.error("Download failed:", error));
            console.log("Your Download Should Have Been Started")
        }
        console.log("Your Download Must Have been Started")
    return (
        <>
        <div className="searchBarWrapper">
            <div className="inputHolder">
                <input type="text" ref={entryElement} style={{margin: "10px", marginRight: "30px", width: "30vw",height: "40px", border: "none", outline: "solid 2px black", borderRadius: "10000px", paddingLeft: "30px"}}/>
                <button className="submitButton" onClick={HandleClick}>Submit</button>
            </div>
        </div>
        <div align="center"><h1 style={{fontSize: "1.2rem", fontWeight: "bold", margin: "50px"}}>{Message}</h1></div>
        </>
    );
}

const WorkSheetWindow = () => {
    return (
        <>
            <NavBarElement />
            <div align="center"><h1 style={{fontSize: "1.2rem", fontWeight: "bold"}}>Enter the topic on which you want Test Assignment and Worksheet On</h1></div>
            <SearchBarComponent />
        </>

    );
}

export default WorkSheetWindow;