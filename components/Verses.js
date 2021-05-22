import VerseExplanation from "@/components/VerseExplanation"

const Verses = ({ chapter, ayahs, audio, children }) => {
    const audiofiles = ayahs.map((aya) => {
        let filename = "/static/audio/";
        if (chapter.number < 10) {
            filename += `00${chapter.number}`;
        } else if (chapter.number >= 10 && chapter.number < 100) {
            filename += `0${chapter.number}`;
        } else {
            filename += `${chapter.number}`;
        }
        if (aya < 10) {
            filename += `00${aya}`;
        } else if (aya >= 10 && aya < 100) {
            filename += `0${aya}`;
        } else {
            filename += `${aya}`;
        }
        filename += ".mp3";
        return filename;
    });
    return (
        <div>
            <div className="py-4">
                <div className="border-solid border-8 border-blue-900 p-1 bg-yellow-100 rounded-xl">
                    <div className="border-solid border-2 border-blue-800 p-3 rounded-sm">
                        <div className="text-right font-quranArabic text-3xl text-gray-800">
                            {
                                ayahs.map((index) => (
                                    `${chapter.ayahs[index - 1].text}(${index}) `
                                ))
                            }
                        </div>
                        <VerseExplanation audiofiles={audiofiles}>{children}</VerseExplanation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verses;