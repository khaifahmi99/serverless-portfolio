import { FC } from "react";

export interface CardProps {

}

const Card: FC<CardProps> = ({ children }) => {
    return (
        <div className="rounded-xl shadow-xl bg-indigo-500 flex items-center justify-center">
            {children}
        </div>
    )
}

export default Card;