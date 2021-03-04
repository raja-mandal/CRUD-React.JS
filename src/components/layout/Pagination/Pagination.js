import React, { useState, useEffect } from 'react';

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    // console.log(showPerPage + 'showPerPage')
    const [counter, setCounter] = useState(1)
    // number of page
    const [numberofButtons, setNumberofButtons] = useState(Math.ceil(total / showPerPage))

    useEffect(() => {
        // console.log('Object')
        const value = showPerPage * counter;
        // console.log("start value:", value - showPerPage)
        // console.log("end value:", value)
        onPaginationChange(value - showPerPage, value)
    }, [counter])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if (type === "next") {
            if (numberofButtons === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }
        }
    }

    return (
        <div className="d-flex justify-content-center">
            {/* pagination ui */}
            <nav>
                <ul className="pagination">
                    <li className="page-item disabled">
                        <a className="page-link" href="!#" tabIndex={-1} aria-disabled="true" onClick={() => onButtonClick('prev')}>Prev</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="!#">1</a></li>

                    {new Array(numberofButtons).fill("").map((el, index) => (
                        <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
                            <a
                                class="page-link"
                                href="!#"
                                onClick={() => setCounter(index + 1)}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}

                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="!#">2</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="!#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="!#" onClick={() => onButtonClick('next')}>Next</a>
                    </li>
                </ul>
            </nav>

            <button type="button" className="btn btn-primary btn-sm" onClick={() => onButtonClick('prev')}>Previous</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => onButtonClick('next')}>Next</button>
        </div>
    );
}

export default Pagination;