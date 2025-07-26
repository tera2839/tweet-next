

export function renderReceiptHTML(props: { name: string; price: number; seller: string }) {
  return `
    <div style="width:600px; padding:20px; font-family:sans-serif; color:#333;">
      <h1 style="text-align:center;">領収書</h1>
      <p>宛名: ${props.name} 様</p>
      <p>金額: ¥${props.price.toLocaleString()}（税込）</p>
      <p>出品者: ${props.seller}</p>
      <p>発行日: ${new Date().toLocaleDateString()}</p>
      <p>発行者: 株式会社サンプル</p>
      <p>住所: 東京都千代田区1-2-3</p>
      <p>電話: 03-1234-5678</p>
    </div>
  `;
}
