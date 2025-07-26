"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

type Props = {
    id: string,
    name: string,
    price: number,
    seller: string,
}

export default function Posts() {

    const [props, setProps] = useState<Props[]>([]);

    const fecthProps = async() => {
        const {data, error} = await supabase.from('props').select('*');
        if(error) {
            console.log(error);
        } else {
            setProps(data)
        }
    };


    useEffect(() => {
        fecthProps();
    },[]);

    const handlePay = async(id: string,) => {
        const {error} = await supabase.from("props").delete().eq("id",id);
        if(error) {
            console.log("削除エラー:", error);
            return
        } 

        await fecthProps();

        // PDF生成API呼び出し（ダウンロード）
       const downloadPDF = async () => {
            const res = await fetch('/api/receipt');
            if (!res.ok) {
                alert('PDF生成失敗');
                return;
            }
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'receipt.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
            };
        downloadPDF();
    }
    

    return(
        <div className="w-[67%] h-full bg-amber-200 text-center">
            <h2 className="">商品一覧</h2>
            {props.map(p => (
                <div key={p.id} id={p.id} className="w-[80%] m-auto bg-amber-400 mb-6 rounded-2xl p-2">
                    <p>{p.name}</p>
                    <p>{p.price + '円'}</p>
                    <p>出品者</p>
                    <p>{p.seller}</p>
                    <button onClick={() => handlePay(p.id)} className="w-[80%] rounded-md border-2 border-gray-800 m-auto bg-amber-200 text-gray-800 mt-4">購入する</button>
                </div>
            ))}
        </div>
    );
}