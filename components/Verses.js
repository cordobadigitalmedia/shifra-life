
const Verses = (props) => {
    const { chapter, ayahs } = props;
    return (
        <div>
            {
                ayahs.map((index) => (
                    <div className="p-4" key={index}>
                        <div className="border-solid border-8 border-blue-900 p-1 bg-yellow-100">
                            <div className="border-solid border-2 border-blue-800 p-3">
                                <div className="text-right font-quranArabic text-3xl text-gray-800">{chapter.ayahs[index - 1].text}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Verses;