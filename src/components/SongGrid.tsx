import type { Song } from "../data";
import { SongCard } from "./SongCard";

export function SongGrid({
    songs,
}: {
    songs: Song[]
}) {
    return (
        <div className="cardGrid ">
            {songs.map((song) => {
                return (
                    <SongCard key={song.id} song={song} />
                );
            })}
        </div>
    );
}
