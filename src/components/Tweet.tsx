"use client";

import { useState } from "react";

export default function Tweet() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const handleTweet = (e: React.FormEvent) => {
        e.preventDefault();

    }

    return(
        <div className="w-[27%] h-full text-gray-50 rounded-sm text-center pt-4"
         style={{ borderTop: "5px solid rgba(140,140,0,0.2)",borderLeft: "5px solid rgba(140,140,0,0.2)", background: "rgba(150,150,0,0.8)"}}>
            <h2>投稿</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="タイトル" type="text" name="title" className="border-2 border-gray-800 rounded-sm mt-10 w-full" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={8} cols={10} name="content"  className="border-2 border-gray-800 rounded-sm mt-10 w-full" placeholder="テキスト"></textarea>
            <button onClick={handleTweet} className="w-[80%] rounded-md border-2 border-gray-800 m-auto bg-amber-200 text-gray-800 mt-4">ツイートする</button>
        </div>
    );
}