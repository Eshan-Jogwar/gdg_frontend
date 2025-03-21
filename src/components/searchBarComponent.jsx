import { useRef, useState } from "react";
const SearchBar = ( { HandleFuntion, topicsFunction, topics } ) => {
    const [suggestions, setSuggestions] = useState([]);
    const searchElement = useRef();
    const HandleOnFocus = () => {
        setSuggestions(['Sequences of real numbers', 'Series', 'ratio and root test', 'Review of limits', 'continuity', 'and differentiability. Mean value theorems: Rolleâ€™s theorem', 'Lagrangeâ€™s theorem', 'Cauchyâ€™s theorem', 'Taylorâ€™s theorem with remainders', 'indeterminate forms', 'curvature', 'curve tracing. Fundamental theorem of Integral calculus', 'mean value theorems of integral calculus', 'evaluation of definite integrals', 'applications in area', 'length', 'volumes and surface of solids of revolutions', 'Improper integrals: Beta and Gamma functions', 'differentiation under integral sign', 'Limit', 'continuity and differentiability of functions ofseveral variables', 'partial derivatives and their geometrical interpretation', 'Tangent plane and normalline. Total differentiation', 'chain rules', 'Taylorâ€™s formula', 'maxima and minima', 'Lagrangeâ€™s method ofundetermined multipliers. Double and triple integrals', 'Jacobian', 'change of order of integration', 'changeof variables', 'application to area', 'volumes', 'Mass', 'Centre of gravity', 'Modelling with Differential Equations', 'Direction Fields and Eulerâ€™s Method', 'Linear and Bernoulliâ€™s differential equations', 'Nonlineardifferential equations', 'Polar curves', 'angle between the radius vector and the tangent', 'angle betweentwo curves. Pedal equations. Curvature and Radius of curvature - Cartesian', 'Parametric', 'Polar andPedal forms. Problems Canter and circle of curvature', 'evolutes and involutes']);
    }
    const HandleOnChange = () => {
        let suggestemp = ['Sequences of real numbers', 'Series', 'ratio and root test', 'Review of limits', 'continuity', 'and differentiability. Mean value theorems: Rolleâ€™s theorem', 'Lagrangeâ€™s theorem', 'Cauchyâ€™s theorem', 'Taylorâ€™s theorem with remainders', 'indeterminate forms', 'curvature', 'curve tracing. Fundamental theorem of Integral calculus', 'mean value theorems of integral calculus', 'evaluation of definite integrals', 'applications in area', 'length', 'volumes and surface of solids of revolutions', 'Improper integrals: Beta and Gamma functions', 'differentiation under integral sign', 'Limit', 'continuity and differentiability of functions ofseveral variables', 'partial derivatives and their geometrical interpretation', 'Tangent plane and normalline. Total differentiation', 'chain rules', 'Taylorâ€™s formula', 'maxima and minima', 'Lagrangeâ€™s method ofundetermined multipliers. Double and triple integrals', 'Jacobian', 'change of order of integration', 'changeof variables', 'application to area', 'volumes', 'Mass', 'Centre of gravity', 'Modelling with Differential Equations', 'Direction Fields and Eulerâ€™s Method', 'Linear and Bernoulliâ€™s differential equations', 'Nonlineardifferential equations', 'Polar curves', 'angle between the radius vector and the tangent', 'angle betweentwo curves. Pedal equations. Curvature and Radius of curvature - Cartesian', 'Parametric', 'Polar andPedal forms. Problems Canter and circle of curvature', 'evolutes and involutes'];
        let val = searchElement.current.value;
        console.log(val);
        suggestemp = suggestemp.filter(topic => topic.toLowerCase().includes(val))
        setSuggestions(suggestemp);
        
    }

    const BodyClickEvent = () => {
        setSuggestions([]);
        document.removeEventListener("click", BodyClickEvent);
    }

    const HandleClick = (elem) => {
        topicsFunction([...topics, elem])
        document.addEventListener("click" , BodyClickEvent);
    }
    
    return (
        <>
        <div className="searchBarWrapper">
            <div className="inputHolder">
                <input type="text" onFocus={HandleOnFocus} onChange={HandleOnChange} ref={searchElement} style={{margin: "10px", marginRight: "30px", width: "30vw",height: "40px", border: "none", outline: "solid 2px black", borderRadius: "10000px", paddingLeft: "30px"}}/>
                <button className="submitButton" onClick={HandleFuntion}>Submit</button>
            </div>
        </div>
        <div className="suggestionHolder">
            <div className="suggester">
                {
                    suggestions.map((elem, index) => {
                        return <div className="suggestedOption" onClick={() => HandleClick(elem)} key={index}>{elem}</div>
                    })
                }
            </div>
        </div>
        </>
    );
} 

export default SearchBar;