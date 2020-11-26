import Anime from 'react-anime';

const Counter = ({ count }) => {

    const animeProps = {
        opacity: [0, 1],
        translateY: [0, -10],
    }
    return (
        <Anime {...animeProps}>
            <h2>{count}</h2>
        </Anime>
    )
}

export default Counter