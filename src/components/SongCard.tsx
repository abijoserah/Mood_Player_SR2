import type { Song } from "../data";

export function SongCard({ song }: { song: Song }) {
    return (
        <div className="cardDiv">
            <img className="cardImg" src={song.cover} />
            <h2 className="cardTitle">{song.title}</h2>
            <p>Release year : {song.year}</p>
            <a href={song.link} className="cardA" target="blank">Play</a>
        </div>
    )
}