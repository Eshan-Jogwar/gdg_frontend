import { useEffect, useState } from "react";
import NavBarElement from "./navBar";
import TopicElement from "./TopicElement";
const LectureSuggester = () => {
    return (
        <>
        <NavBarElement />
        <div align="center" style={{margin: "10px"}}><h1 style={{fontWeight: "bold"}}>Type Something in the search bar and choose from given topics</h1></div>
        <TopicElement />
        </>
    );
}

export default LectureSuggester;