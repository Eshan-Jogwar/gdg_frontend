import { useState } from "react";
import SearchBar from "./searchBarComponent";
const TopicElement = () => {
    const [topics, setTopics] = useState(["series"])
    const [results, setResults] = useState([]);
    const HandleFuntion = () => {
        fetch("http://127.0.0.1:5000/api/videoId?q=" + topics.toString()).then(elem => {
            elem.json().then(elem => {
                setResults(elem.result)
            })
        })
    }

    const HandleClick = (elem) => {
        let temp = topics
        temp = temp.filter((element) => !(element == elem))
        setTopics(temp);
    }
    return (
        <>
        <SearchBar HandleFuntion={HandleFuntion} topicsFunction={setTopics} topics={topics}/>
        <div className="topicElementsHolder">
            {topics.map((elem) => {
                return (
                    <div className="topicWraper">
                        <label className="topicRibbonLabel">{elem}</label>
                        <button className="topicRibbonButton" onClick={() => HandleClick(elem)}>&times;</button>
                    </div>
                );
            })}
        </div>
        <div className="videoHolder">
            {results.map((elem) => {
                return <><iframe style={{marginBottom: "30px"}} width="560" height="315" src={`https://www.youtube.com/embed/${elem}?si=PaEAw9SzN8Kn4yv-`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><hr /></>
            })}
        </div>
        </>
    );
}

export default TopicElement;