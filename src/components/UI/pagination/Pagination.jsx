import React from "react";
import PoginationButton from "../button/PoginationButton";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page__wrapper">
            {pagesArray.map((p) => {
                return (
                    <PoginationButton
                        key={p}
                        onClick={() => changePage(p)}
                        isActive={page === p ? "active__btn" : "default__btn"}
                    >
                        {p}
                    </PoginationButton>
                );
            })}
        </div>
    );
};

export default Pagination;
