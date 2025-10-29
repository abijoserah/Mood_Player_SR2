import { SongCard } from "./SongCard";

export function SongGrid({
    songs,
}) {
    return (
        <div className="cardGrid">
            {songs.map((song) => {
                return (
                    <SongCard key={song.id} song={song} />
                );
            })}
        </div>
    );
}
