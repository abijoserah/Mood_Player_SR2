import { flushSync } from "react-dom";

interface MoodSelectorProps {
    moods: string[]
    onSelectMood: React.Dispatch<React.SetStateAction<string | null>>
    currentMood: string | null
}
export function MoodSelector(
    { moods,
        currentMood,
        onSelectMood }: MoodSelectorProps
) {

    return (
        <div className="msDiv">
            <p className="msP">HOW DO YOU FEEL TODAY ?</p>
            <div className="msDiv1">
                {moods.map((mood) => {
                    const isCurrentMood = mood.toLowerCase() === currentMood?.toLowerCase();

                    return (
                        <button key={mood}
                            style={{
                                backgroundColor: isCurrentMood ? "oklch(70.2% 0.183 293.541)" : "oklch(92.2% 0 0)",
                                color: 'black'
                            }} className="msButton" onClick={() => {
                                flushSync(() => {
                                    onSelectMood(mood)
                                })


                                const cardGrid = document.querySelector(".cardGrid")
                                if (!cardGrid) {
                                    return;
                                }
                                cardGrid.scrollIntoView({
                                    inline: "start", behavior: "smooth",
                                    block: "start"
                                })

                            }}>{mood}</button>)
                })}
            </div>
        </div>

    )

}