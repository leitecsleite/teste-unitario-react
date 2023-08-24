import React, { Suspense } from "react";
import { useState } from "react";
//import LazyComponent from "./lazyComponent";

const LazyComponent = React.lazy(() => import("./lazyComponent"))

export const HomeLazyComponent = ()  => {
    const [show, setShow] = useState(false); 

    return (
        <div>
            <p>
                <button onClick={() => setShow((s) => !s)}>
                    show {show ? 'Lc on screen' : 'LC is off screen'}
                </button>
            </p>
            <Suspense fallback = {<p>carregando...</p>}>
            {show &&  <LazyComponent />}
            </Suspense>
        </div>
    )
    
}