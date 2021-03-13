import React, {useEffect, useState, useRef} from "react";

const SemanticExpander = ({list, selected, setSelected}) => {
    const [expander, setExpander] = useState(false)
    let parent = useRef();
    const styles = " transition visible";
    const [defaultTitle, setDefault] = useState("Ukraine");
    let doc = document;

    useEffect((e) => {
        doc.addEventListener("click",
            (e) => {
                if (parent.current.contains(e.target)) {
                    return;
                }
                setExpander(false)
            },
            {capture: true})
    }, [])


    return (
            <div
                ref={parent}
                onClick={(e) => setExpander(!expander)}
                className="ui fluid search selection dropdown">
                <input type="hidden" name="country" />
                <i className="dropdown icon" />
                    <div className="default text">{selected.title}</div>
                    <div  className={expander ? `menu ${styles}` : "menu"}>
                        {
                        list.map(country => {
                            if (country.title === selected.title) {
                                return null;
                            }
                            return <div
                                onClick={(e) => setSelected(country)}
                                key={country.key} className="item">{country.title}</div>
                        })
                        }
                    </div>
            </div>
    )
}


export default SemanticExpander