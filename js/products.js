const products = [
  {
    id: "1",
    category: ["ชา"],
    image: "ชาไทย.webp",
    name: "ชาไทย",
    price: "60 บาท",
    description:
      "สัมผัสเสน่ห์แห่งรสชาติไทยแท้กับชาไทยหอมเข้ม ที่ผสานความหวานมันและความหอมกรุ่นของชาอย่างลงตัว ดื่มด่ำกับกลิ่นอายแบบดั้งเดิมที่มาพร้อมความสดชื่นในทุกคำ",
  },
  {
    id: "2",
    category: ["ลาเต้"],
    image: "img/กุหลาบลาเต้.jpg",
    name: "กุหลาบลาเต้",
    price: "60 บาท",
    description:
      "เครื่องดื่มที่มีการผสมผสานระหว่างรสชาติของนมกับความหอมหวานของดอกกุหลาบ",
  },
  {
    id: "3",
    category: ["ลาเต้"],
    image: "img/โกโก้ลาเต้.jpg",
    name: "โกโก้ลาเต้",
    price: "60 บาท",
    description:
      "สัมผัสความเข้มข้นที่หอมหวานไปกับโกโก้ที่ชวนหลงใหล ทุกอึกคือการเดินทางเข้าสู่โลกของช็อกโกแลตแท้ๆ ที่คัดสรรมาอย่างพิถีพิถัน ดื่มด่ำความอร่อยที่ทั้งนุ่มละมุนและอัดแน่นด้วยรสชาติเข้มข้น",
  },
  {
    id: "4",
    category: ["ชา"],
    image: "img/ชาเขียวมัทฉะชิอาวาเสะ.jpg",
    name: "ชาเขียวมัทฉะชิอาวาเสะ",
    price: "60 บาท",
    description:
      "เติมพลังความสดชื่นด้วยชาเขียวมัทฉะชิอาวาเสะ รสชาติเข้มข้นที่กลมกล่อมอย่างลงตัว มัทฉะแท้ที่คัดสรรจากใบชาเกรดพรีเมียม ผสมผสานด้วยสูตรลับเฉพาะ",
  },
];

function showProductDetails(productId) {
  console.log(`Show ${productId}`);

  const product = products.find((p) => p.id == productId);

  if (!product) {
    console.error(`Product ${productId} not found`);
    return;
  }

  const { name, description, price, image } = product;
  const elements = {
    "product-name": name,
    "product-description": description,
    "product-price": price,
    "product-image": image,
  };

  for (const [id, content] of Object.entries(elements)) {
    console.log(`Setting ${id} to ${content}`);
    document.getElementById(id)[id === "product-image" ? "src" : "innerText"] =
      content;
  }
}
