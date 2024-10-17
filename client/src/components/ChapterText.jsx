import React from "react";

const ChapterText = ({ text, fontSize }) => {
    return (
        <div style={{ fontSize }} className="text-gray-900 p-4 overflow-y-auto h-full bg-second">
            {text}
        </div>
    );
};

export default ChapterText;