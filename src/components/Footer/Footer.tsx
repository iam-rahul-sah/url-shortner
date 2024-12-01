import React from "react";

interface IFooterProps {

}

export const Footer: React.FunctionComponent<IFooterProps> = () => {
    return (
        <div className="bg-slate-900 text-white text-base text-center py-5">
            Copyright &#169; URLShortner | Rahul Sah
        </div>
    )
}

