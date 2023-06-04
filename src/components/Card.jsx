import { useState } from "react";
import Button from "./Button";

function Card({userName, user, formatUserName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const isFollowingClassName = isFollowing ? 'is-following' : '';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className="card-twitter">
            <header>
                <img src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div>
                    <strong>{user}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <Button handleClick={handleClick} text={text} buttonClassName={isFollowingClassName} />
            </aside>
        </article>
    );
}

export default Card;
