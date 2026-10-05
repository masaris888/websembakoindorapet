// ============================================================
// INDORAPET - TOKO SEMBAKO GROSIR & ECERAN
// Interactive Logic: Catalog with Flexible Portions (Eceran & Grosir)
// ============================================================

// 1. DATA PRODUK DENGAN PILIHAN UKURAN (ECERAN HINGGA GROSIR)
const products = [
    {
        id: 1,
        name: "Beras Super Pulen",
        category: "beras",
        rating: "4.9",
        badge: { text: "Terlaris", type: "terlaris" },
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        variants: [
            {
                id: "1-1kg",
                name: "1 kg (Eceran)",
                spec: "Kemasan 1 kg • Pas untuk kebutuhan beberapa hari",
                price: 14500,
                originalPrice: 16000,
                default: true
            },
            {
                id: "1-5kg",
                name: "5 kg (1 Karung)",
                spec: "Kemasan karung 5 kg • Lebih hemat untuk keluarga",
                price: 68000,
                originalPrice: 75000
            }
        ]
    },
    {
        id: 2,
        name: "Telur Ayam Negeri Segar",
        category: "beras",
        rating: "4.9",
        badge: { text: "Segar Tiap Hari", type: "stok" },
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80",
        variants: [
            {
                id: "2-seperapat",
                name: "Seperempat (1/4 kg / 250g)",
                spec: "Isi ~4 butir telur pilihan • Pas & hemat",
                price: 7500,
                originalPrice: 8500,
                default: true
            },
            {
                id: "2-setengah",
                name: "Setengah (1/2 kg / 500g)",
                spec: "Isi ~8 butir telur segar dari peternak",
                price: 15000,
                originalPrice: 16500
            },
            {
                id: "2-1kg",
                name: "1 kg Penuh",
                spec: "Isi ~16 butir telur segar terjamin",
                price: 29000,
                originalPrice: 32000
            }
        ]
    },
    {
        id: 3,
        name: "Indomie Goreng Original",
        category: "instan",
        rating: "5.0",
        badge: { text: "Favorit", type: "terlaris" },
        image: "images/INDOMIE ORIGINAL.jpg",
        variants: [
            {
                id: "3-pcs",
                name: "1 Bungkus (Per Bungkus)",
                spec: "1 Pcs eceran 85 gr • Bisa beli satuan",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "3-5pcs",
                name: "Paket 5 Bungkus",
                spec: "Isi 5 bungkus • Lebih hemat santap bersama",
                price: 16500,
                originalPrice: 18500
            },
            {
                id: "3-dus",
                name: "1 Dus (40 Pcs)",
                spec: "1 Karton isi 40 bungkus • Harga grosir murah",
                price: 115000,
                originalPrice: 125000
            }
        ]
    },
    {
        id: 10,
        name: "Indomie Goreng Rasa Rendang",
        category: "instan",
        rating: "4.9",
        badge: { text: "Rasa Otentik", type: "hemat" },
        image: "images/MIE RENDANG.jpg",
        variants: [
            {
                id: "10-pcs",
                name: "1 Bungkus (Per Bungkus)",
                spec: "1 Bungkus 91 gr • Bumbu rendang Padang gurih & wangi",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "10-5pcs",
                name: "Paket 5 Bungkus",
                spec: "Isi 5 bungkus rendang • Pas untuk stok keluarga",
                price: 16500,
                originalPrice: 18500
            },
            {
                id: "10-dus",
                name: "1 Dus (40 Pcs)",
                spec: "1 Karton isi 40 bungkus • Harga grosir murah",
                price: 120000,
                originalPrice: 135000
            }
        ]
    },
    {
        id: 11,
        name: "Indomie Goreng Rasa Mie Aceh",
        category: "instan",
        rating: "4.9",
        badge: { text: "Khas Aceh", type: "terlaris" },
        image: "images/MIE ACEH.jpg",
        variants: [
            {
                id: "11-pcs",
                name: "1 Bungkus (Per Bungkus)",
                spec: "1 Bungkus 90 gr • Mie tebal kenyal bumbu rempah Aceh pedas",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "11-5pcs",
                name: "Paket 5 Bungkus",
                spec: "Isi 5 bungkus Mie Aceh • Lebih hemat",
                price: 16500,
                originalPrice: 18500
            },
            {
                id: "11-dus",
                name: "1 Dus (40 Pcs)",
                spec: "1 Karton isi 40 bungkus • Harga grosir murah",
                price: 120000,
                originalPrice: 135000
            }
        ]
    },
    {
        id: 12,
        name: "Indomie Kuah Rasa Soto Mie",
        category: "instan",
        rating: "4.9",
        badge: { text: "Kuah Segar", type: "stok" },
        image: "images/MIE SOTO.jpg",
        variants: [
            {
                id: "12-pcs",
                name: "1 Bungkus (Per Bungkus)",
                spec: "1 Bungkus 70 gr • Kuah gurih harum jeruk nipis khas Soto",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "12-5pcs",
                name: "Paket 5 Bungkus",
                spec: "Isi 5 bungkus Soto Mie • Pas santap hangat",
                price: 16500,
                originalPrice: 18500
            },
            {
                id: "12-dus",
                name: "1 Dus (40 Pcs)",
                spec: "1 Karton isi 40 bungkus • Harga grosir murah",
                price: 115000,
                originalPrice: 125000
            }
        ]
    },
    {
        id: 13,
        name: "Indomie HypeAbis Rasa Ayam Geprek",
        category: "instan",
        rating: "5.0",
        badge: { text: "Super Pedas", type: "terlaris" },
        image: "images/MIE GEPREK.jpg",
        variants: [
            {
                id: "13-pcs",
                name: "1 Bungkus (Per Bungkus)",
                spec: "1 Bungkus 85 gr • Sensasi pedas nampol ayam geprek",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "13-5pcs",
                name: "Paket 5 Bungkus",
                spec: "Isi 5 bungkus Mie Geprek • Lebih hemat",
                price: 16500,
                originalPrice: 18500
            },
            {
                id: "13-dus",
                name: "1 Dus (40 Pcs)",
                spec: "1 Karton isi 40 bungkus • Grosir murah",
                price: 120000,
                originalPrice: 135000
            }
        ]
    },
    {
        id: 14,
        name: "Kopi Kapal Api Spesial Mix (Kopi + Gula)",
        category: "instan",
        rating: "4.9",
        badge: { text: "Kopi Warung", type: "stok" },
        image: "images/KOPI KAPAL API.jpg",
        variants: [
            {
                id: "14-renceng",
                name: "1 Renceng (10 Sachet)",
                spec: "1 Renceng isi 10 sachet kopi hitam mantap",
                price: 14500,
                originalPrice: 16500,
                default: true
            },
            {
                id: "14-sachet",
                name: "1 Sachet (Satuan)",
                spec: "1 Sachet 24 gr eceran siap seduh",
                price: 1500,
                originalPrice: 2000
            },
            {
                id: "14-dus",
                name: "1 Dus (12 Renceng / 120 Sachet)",
                spec: "1 Karton grosir toko isi 12 renceng",
                price: 168000,
                originalPrice: 185000
            }
        ]
    },
    {
        id: 15,
        name: "Kopi Good Day Cappuccino + Choco Granule",
        category: "instan",
        rating: "4.9",
        badge: { text: "Favorit Anak Muda", type: "terlaris" },
        image: "images/KOPI GOODDAY.jpg",
        variants: [
            {
                id: "15-renceng",
                name: "1 Renceng (10 Sachet)",
                spec: "10 Sachet lengkap taburan choco granule nikmat",
                price: 21000,
                originalPrice: 23500,
                default: true
            },
            {
                id: "15-sachet",
                name: "1 Sachet (Satuan)",
                spec: "1 Sachet 25 gr + cokelat butir",
                price: 2500,
                originalPrice: 3000
            },
            {
                id: "15-dus",
                name: "1 Dus (12 Renceng / 120 Sachet)",
                spec: "1 Karton isi 12 renceng harga grosir",
                price: 245000,
                originalPrice: 270000
            }
        ]
    },
    {
        id: 16,
        name: "Teh Pucuk Harum Melati 350ml",
        category: "instan",
        rating: "4.8",
        badge: { text: "Segar Dingin", type: "stok" },
        image: "images/TEH PUCUK.jpg",
        variants: [
            {
                id: "16-botol",
                name: "1 Botol (350ml)",
                spec: "1 Botol 350ml teh melati segar pucuk daun",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "16-3botol",
                name: "Paket 3 Botol",
                spec: "3 Botol 350ml lebih hemat pelepas dahaga",
                price: 10000,
                originalPrice: 12000
            },
            {
                id: "16-dus",
                name: "1 Dus (24 Botol)",
                spec: "1 Karton isi 24 botol harga distributor",
                price: 75000,
                originalPrice: 85000
            }
        ]
    },
    {
        id: 17,
        name: "Nutrisari Jeruk Peras Segar",
        category: "instan",
        rating: "4.8",
        badge: { text: "Vitamin C", type: "hemat" },
        image: "images/NUTRI SARI.jpg",
        variants: [
            {
                id: "17-renceng",
                name: "1 Renceng (10 Sachet)",
                spec: "1 Renceng isi 10 sachet jeruk peras segar",
                price: 14000,
                originalPrice: 16000,
                default: true
            },
            {
                id: "17-sachet",
                name: "1 Sachet (Satuan)",
                spec: "1 Sachet sari buah jeruk bervitamin",
                price: 1500,
                originalPrice: 2000
            },
            {
                id: "17-dus",
                name: "1 Dus (12 Renceng / 120 Sachet)",
                spec: "1 Karton isi 12 renceng untuk warung",
                price: 160000,
                originalPrice: 180000
            }
        ]
    },
    {
        id: 18,
        name: "Susu Kental Manis Frisian Flag (Bendera)",
        category: "instan",
        rating: "4.9",
        badge: { text: "Stok Ready", type: "stok" },
        image: "images/SUSU FRISIAN FLAG.jpg",
        variants: [
            {
                id: "18-renceng",
                name: "1 Renceng (6 Sachet)",
                spec: "1 Renceng isi 6 sachet praktis manis gurih",
                price: 9500,
                originalPrice: 11000,
                default: true
            },
            {
                id: "18-kaleng",
                name: "1 Kaleng (370 gr)",
                spec: "Kemasan kaleng 370 gr tahan lama",
                price: 12500,
                originalPrice: 14000
            },
            {
                id: "18-pouch",
                name: "1 Pouch (545 gr)",
                spec: "Kemasan refill pouch besar hemat",
                price: 17500,
                originalPrice: 19500
            }
        ]
    },
    {
        id: 35,
        name: "Susu Steril Nestle Bear Brand (Susu Beruang)",
        category: "instan",
        rating: "5.0",
        badge: { text: "100% Murni", type: "terlaris" },
        image: "images/BEAR BRAND.jpg",
        variants: [
            {
                id: "35-eceran",
                name: "1 Kaleng (Eceran / Satuan)",
                spec: "1 Kaleng 189 ml • 100% susu sapi murni steril siap minum",
                price: 10500,
                originalPrice: 12000,
                default: true
            },
            {
                id: "35-3kaleng",
                name: "Paket 3 Kaleng",
                spec: "Isi 3 kaleng 189 ml • Lebih hemat jaga daya tahan tubuh",
                price: 30500,
                originalPrice: 35000
            },
            {
                id: "35-6kaleng",
                name: "Paket 6 Kaleng (1/2 Lusin)",
                spec: "Isi 6 kaleng steril siap konsumsi harian",
                price: 60000,
                originalPrice: 68000
            },
            {
                id: "35-dus",
                name: "1 Dus (30 Kaleng)",
                spec: "1 Karton isi 30 kaleng • Harga grosir murah distributor",
                price: 295000,
                originalPrice: 330000
            }
        ]
    },
    {
        id: 19,
        name: "Air Mineral Aqua Botol 600ml",
        category: "instan",
        rating: "4.9",
        badge: { text: "Murni Segar", type: "stok" },
        image: "images/AQUA.jpg",
        variants: [
            {
                id: "19-botol",
                name: "1 Botol (600ml)",
                spec: "1 Botol 600ml air mineral higienis dingin/biasa",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "19-dus",
                name: "1 Dus (24 Botol)",
                spec: "1 Karton isi 24 botol 600ml hemat",
                price: 52000,
                originalPrice: 58000
            }
        ]
    },
    {
        id: 4,
        name: "Minyak Goreng Sania Pouch",
        category: "minyak",
        rating: "4.9",
        badge: { text: "Hemat 10%", type: "hemat" },
        image: "images/MINYAK SANIA.jpg",
        variants: [
            {
                id: "4-1l",
                name: "1 Liter (Pouch)",
                spec: "Kemasan 1 Liter • Bening higienis",
                price: 18000,
                originalPrice: 19500
            },
            {
                id: "4-2l",
                name: "2 Liter (Pouch)",
                spec: "Kemasan 2 Liter • Paling laris hemat",
                price: 34500,
                originalPrice: 38000,
                default: true
            }
        ]
    },
    {
        id: 5,
        name: "Gula Pasir Gulaku Putih",
        category: "gula",
        rating: "4.8",
        badge: { text: "Stok Ready", type: "stok" },
        image: "images/GULAKU.jpg",
        variants: [
            {
                id: "5-half",
                name: "1/2 kg (500 gr)",
                spec: "Takaran eceran setengah kilogram",
                price: 9000,
                originalPrice: 10000
            },
            {
                id: "5-1kg",
                name: "1 kg Penuh",
                spec: "Kemasan pack 1 kg • Manis alami tebu",
                price: 17500,
                originalPrice: 19000,
                default: true
            }
        ]
    },
    {
        id: 6,
        name: "Tepung Terigu Segitiga Biru",
        category: "gula",
        rating: "4.8",
        badge: null,
        image: "images/TEPUNG.jpg",
        variants: [
            {
                id: "6-half",
                name: "1/2 kg (500 gr)",
                spec: "Takaran eceran tepung serbaguna",
                price: 7000,
                originalPrice: 8000
            },
            {
                id: "6-1kg",
                name: "1 kg Penuh",
                spec: "Kemasan 1 kg • Cocok untuk aneka kue & gorengan",
                price: 13000,
                originalPrice: 14500,
                default: true
            }
        ]
    },
    {
        id: 7,
        name: "Kecap Manis Bango",
        category: "bumbu",
        rating: "4.9",
        badge: null,
        image: "images/KECAP MANIS.jpg",
        variants: [
            {
                id: "7-refill",
                name: "Pouch 220ml",
                spec: "Kemasan hemat isi ulang",
                price: 11000,
                originalPrice: 12500
            },
            {
                id: "7-botol",
                name: "Botol 520ml",
                spec: "Botol kaca 520ml • Kedelai hitam Mallika",
                price: 24000,
                originalPrice: 26500,
                default: true
            }
        ]
    },
    {
        id: 20,
        name: "Bawang Merah Brebes Pilihan",
        category: "bumbu",
        rating: "4.9",
        badge: { text: "Segar Pasar", type: "stok" },
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
        variants: [
            {
                id: "20-seperapat",
                name: "Seperempat (1/4 kg / 250g)",
                spec: "Bawang merah super Brebes kering & wangi",
                price: 9000,
                originalPrice: 10500,
                default: true
            },
            {
                id: "20-setengah",
                name: "Setengah (1/2 kg / 500g)",
                spec: "Kualitas pilihan kering tidak busuk",
                price: 17500,
                originalPrice: 19500
            },
            {
                id: "20-1kg",
                name: "1 kg Penuh",
                spec: "Kiloan lebih hemat untuk stok masak",
                price: 34000,
                originalPrice: 38000
            }
        ]
    },
    {
        id: 21,
        name: "Bawang Putih Kating & Honan Segar",
        category: "bumbu",
        rating: "4.8",
        badge: { text: "Kualitas Super", type: "stok" },
        image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=600&q=80",
        variants: [
            {
                id: "21-seperapat",
                name: "Seperempat (1/4 kg / 250g)",
                spec: "Siung besar padat & wangi tajam",
                price: 8500,
                originalPrice: 10000,
                default: true
            },
            {
                id: "21-setengah",
                name: "Setengah (1/2 kg / 500g)",
                spec: "Bersih & kering siap kupas",
                price: 16500,
                originalPrice: 18500
            },
            {
                id: "21-1kg",
                name: "1 kg Penuh",
                spec: "Harga grosir kiloan murah",
                price: 32000,
                originalPrice: 36000
            }
        ]
    },
    {
        id: 22,
        name: "Garam Dapur Beryodium Cap Kapal",
        category: "bumbu",
        rating: "4.9",
        badge: null,
        image: "images/GARAM.jpg",
        variants: [
            {
                id: "22-bungkus",
                name: "1 Bungkus (250 gr)",
                spec: "Garam beryodium halus & putih bersih",
                price: 2500,
                originalPrice: 3000,
                default: true
            },
            {
                id: "22-pak",
                name: "1 Pak (Isi 10 Bungkus)",
                spec: "Pak isi 10 kemasan lebih hemat",
                price: 22000,
                originalPrice: 25000
            }
        ]
    },
    {
        id: 23,
        name: "Penyedap Rasa Royco (Ayam / Sapi)",
        category: "bumbu",
        rating: "5.0",
        badge: { text: "Wajib Dapur", type: "terlaris" },
        image: "images/ROYCO.jpg",
        variants: [
            {
                id: "23-renceng",
                name: "1 Renceng (12 Sachet)",
                spec: "1 Renceng isi 12 sachet bumbu kaldu gurih",
                price: 5500,
                originalPrice: 6500,
                default: true
            },
            {
                id: "23-sachet",
                name: "1 Sachet (Satuan)",
                spec: "1 Sachet eceran 9 gr",
                price: 500,
                originalPrice: 1000
            },
            {
                id: "23-bal",
                name: "1 Bal (10 Renceng / 120 Sachet)",
                spec: "Harga grosir untuk warung / usaha kuliner",
                price: 52000,
                originalPrice: 60000
            }
        ]
    },
    {
        id: 24,
        name: "Ladaku Merica Bubuk Murni",
        category: "bumbu",
        rating: "4.9",
        badge: null,
        image: "images/LADAKU.jpg",
        variants: [
            {
                id: "24-renceng",
                name: "1 Renceng (12 Sachet)",
                spec: "12 Sachet merica putih bubuk 100% murni",
                price: 11500,
                originalPrice: 13000,
                default: true
            },
            {
                id: "24-sachet",
                name: "1 Sachet (Satuan)",
                spec: "1 Sachet merica bubuk sachet praktis",
                price: 1000,
                originalPrice: 1500
            }
        ]
    },
    {
        id: 25,
        name: "Santan Kelapa Siap Pakai Kara",
        category: "bumbu",
        rating: "4.9",
        badge: { text: "Praktis Gurih", type: "stok" },
        image: "images/SANTAN.jpg",
        variants: [
            {
                id: "25-65ml",
                name: "1 Kotak (65 ml)",
                spec: "Santan kelapa murni kental siap tuang",
                price: 3500,
                originalPrice: 4000,
                default: true
            },
            {
                id: "25-200ml",
                name: "1 Kotak (200 ml)",
                spec: "Ukuran sedang untuk gulai & kolak porsi besar",
                price: 9500,
                originalPrice: 11000
            },
            {
                id: "25-dus",
                name: "1 Dus (36 Pcs x 65ml)",
                spec: "1 Karton isi 36 pcs harga distributor",
                price: 118000,
                originalPrice: 130000
            }
        ]
    },
    {
        id: 26,
        name: "Margarin Serbaguna Blue Band",
        category: "minyak",
        rating: "4.9",
        badge: { text: "Serbaguna", type: "terlaris" },
        image: "images/BLUE BAND.jpg",
        variants: [
            {
                id: "26-sachet",
                name: "1 Sachet (200 gr)",
                spec: "Margarin serbaguna aroma butter lezat",
                price: 9500,
                originalPrice: 11000,
                default: true
            },
            {
                id: "26-kaleng",
                name: "1 Kaleng (1 kg)",
                spec: "Kemasan kaleng besar untuk bakery & roti",
                price: 45000,
                originalPrice: 50000
            }
        ]
    },
    {
        id: 27,
        name: "Saus Sambal Ekstra Pedas ABC",
        category: "bumbu",
        rating: "4.8",
        badge: null,
        image: "images/SAMBAL ABC.jpg",
        variants: [
            {
                id: "27-botol",
                name: "Botol Sedang (335 ml)",
                spec: "Saus cabai asli pedas nikmat",
                price: 14500,
                originalPrice: 16500,
                default: true
            },
            {
                id: "27-pouch",
                name: "Pouch Refill 1 kg",
                spec: "Ukuran jumbo hemat untuk jualan / dapur",
                price: 28000,
                originalPrice: 32000
            }
        ]
    },
    {
        id: 28,
        name: "Bihun Jagung Padamu / Pilihan Nusantara",
        category: "instan",
        rating: "4.7",
        badge: null,
        image: "images/BIHUN JAGUNG.jpg",
        variants: [
            {
                id: "28-bungkus",
                name: "1 Bungkus (350 gr)",
                spec: "Bihun jagung kenyal tidak mudah hancur",
                price: 8000,
                originalPrice: 9500,
                default: true
            },
            {
                id: "28-bal",
                name: "1 Bal (5 Bungkus)",
                spec: "Paket 5 bungkus bihun jagung",
                price: 38000,
                originalPrice: 44000
            }
        ]
    },
    {
        id: 29,
        name: "Sabun Cuci Piring Sunlight Jeruk Nipis",
        category: "kebersihan",
        rating: "5.0",
        badge: { text: "Ampuh Lemak", type: "terlaris" },
        image: "images/SUNLIGHT.jpg",
        variants: [
            {
                id: "29-210ml",
                name: "Pouch 210 ml",
                spec: "Ekstrak jeruk nipis asli bersihkan lemak cepat",
                price: 5000,
                originalPrice: 6000
            },
            {
                id: "29-650ml",
                name: "Pouch Jumbo 650 ml",
                spec: "Ukuran besar paling hemat keluarga",
                price: 14500,
                originalPrice: 17000,
                default: true
            },
            {
                id: "29-dus",
                name: "1 Dus (12 Pouch x 650ml)",
                spec: "1 Karton isi 12 pouch harga grosir",
                price: 165000,
                originalPrice: 190000
            }
        ]
    },
    {
        id: 30,
        name: "Deterjen Bubuk Daia Bunga / Putih",
        category: "kebersihan",
        rating: "4.9",
        badge: { text: "Wangi Semerbak", type: "stok" },
        image: "images/DAIA.jpg",
        variants: [
            {
                id: "30-1kg",
                name: "1 Bag (1 kg)",
                spec: "Kemasan 1 kg • Bersih cemerlang & wangi semerbak",
                price: 20000,
                originalPrice: 23000,
                default: true
            },
            {
                id: "30-15kg",
                name: "1 Bag Jumbo (1.5 kg)",
                spec: "Kemasan jumbo 1.5 kg • Lebih hemat untuk keluarga",
                price: 29500,
                originalPrice: 33000
            },
            {
                id: "30-290g",
                name: "1 Bag Kecil (290 gr)",
                spec: "Kemasan praktis 290 gr • Busa melimpah",
                price: 6500,
                originalPrice: 7500
            }
        ]
    },
    {
        id: 31,
        name: "Pewangi Pakaian Downy / Molto Konsentrat",
        category: "kebersihan",
        rating: "4.8",
        badge: { text: "Harum Tahan Lama", type: "hemat" },
        image: "images/DOWNY.jpg",
        variants: [
            {
                id: "31-renceng",
                name: "1 Renceng (12 Sachet)",
                spec: "12 Sachet pewangi konsentrat harum seharian",
                price: 11500,
                originalPrice: 13500,
                default: true
            },
            {
                id: "31-pouch",
                name: "Pouch Refill 650 ml",
                spec: "Kemasan refill botol wangi mewah",
                price: 21000,
                originalPrice: 24500
            }
        ]
    },
    {
        id: 32,
        name: "Sabun Mandi Batang Lifebuoy Total 10",
        category: "kebersihan",
        rating: "4.9",
        badge: null,
        image: "images/LIFEBOUY.jpg",
        variants: [
            {
                id: "32-batang",
                name: "1 Batang (110 gr)",
                spec: "Perlindungan kuman mandi sehat sekeluarga",
                price: 4500,
                originalPrice: 5500,
                default: true
            },
            {
                id: "32-paket4",
                name: "Paket Hemat 4 Batang",
                spec: "Paket isi 4 batang sabun mandi",
                price: 16500,
                originalPrice: 19500
            }
        ]
    },
    {
        id: 33,
        name: "Pasta Gigi Pepsodent Pencegah Gigi Berlubang",
        category: "kebersihan",
        rating: "4.9",
        badge: { text: "Stok Ready", type: "stok" },
        image: "images/PEPSODENT.jpg",
        variants: [
            {
                id: "33-75g",
                name: "Ukuran Sedang (75 gr)",
                spec: "Perlindungan mikro kalsium aktif",
                price: 5500,
                originalPrice: 6500
            },
            {
                id: "33-190g",
                name: "Ukuran Besar (190 gr)",
                spec: "Ukuran jumbo keluarga hemat",
                price: 14500,
                originalPrice: 17000,
                default: true
            }
        ]
    },
    {
        id: 34,
        name: "Sampo Rambut Pantene / Sunsilk",
        category: "kebersihan",
        rating: "4.8",
        badge: null,
        image: "images/SUNSILK.jpg",
        variants: [
            {
                id: "34-renceng",
                name: "1 Renceng (12 Sachet)",
                spec: "12 Sachet sampo rambut hitam & halus",
                price: 12000,
                originalPrice: 14000,
                default: true
            },
            {
                id: "34-botol",
                name: "1 Botol (160 ml)",
                spec: "Kemasan botol praktis mandi",
                price: 25000,
                originalPrice: 28500
            }
        ]
    },
    {
        id: 8,
        name: "Teh Celup Sariwangi",
        category: "instan",
        rating: "4.7",
        badge: null,
        image: "images/SARI WANGI.jpg",
        variants: [
            {
                id: "8-kotak",
                name: "Kotak 25 Bag",
                spec: "1 Kotak isi 25 kantong teh celup asli",
                price: 7500,
                originalPrice: 9000,
                default: true
            }
        ]
    },
    {
        id: 9,
        name: "Paket Berkah Dapur Hemat",
        category: "paket",
        rating: "5.0",
        badge: { text: "Paket Komplit", type: "hemat" },
        image: "images/PAKET HEMAT.jpg",
        variants: [
            {
                id: "9-paket-mini",
                name: "Paket Mini (Beras 1kg + Minyak 1L + Telur 1/2kg)",
                spec: "Paket mingguan hemat siap masak",
                price: 46000,
                originalPrice: 52000,
                default: true
            },
            {
                id: "9-paket-lengkap",
                name: "Paket Jumbo (Beras 5kg + Minyak 2L + Gula 1kg + Telur 1kg)",
                spec: "Paket bulanan super hemat & komplit",
                price: 145000,
                originalPrice: 160000
            }
        ]
    }
];

// Menyimpan varian yang saat ini dipilih pengguna pada tiap produk
const selectedVariantMap = {};

// Nomor WhatsApp Kasir Toko & Syarat Free Ongkir
const WHATSAPP_NUMBER = "628563842046";
const FREE_ONGKIR_MIN = 75000;

// State Keranjang & Voucher
let cart = [];
let appliedDiscount = 0;
let appliedVoucherCode = "";

// DOM Elements
const productGrid = document.getElementById("productGrid");
const cartOverlay = document.getElementById("cartOverlay");
const cartSidebar = document.getElementById("cartSidebar");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartItemCountSub = document.getElementById("cartItemCountSub");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartDiscount = document.getElementById("cartDiscount");
const cartTotal = document.getElementById("cartTotal");
const discountRow = document.getElementById("discountRow");
const discountPercent = document.getElementById("discountPercent");

const ongkirRemaining = document.getElementById("ongkirRemaining");
const ongkirProgress = document.getElementById("ongkirProgress");
const ongkirText = document.getElementById("ongkirText");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const catPills = document.querySelectorAll(".cat-pill");
const checkoutBtn = document.getElementById("checkoutBtn");
const toast = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");

const voucherInput = document.getElementById("voucherInput");
const applyVoucherBtn = document.getElementById("applyVoucherBtn");
const voucherMessage = document.getElementById("voucherMessage");
const voucherTag = document.getElementById("voucherTag");

// Format Angka ke Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
}

// 2. RENDER DAFTAR PRODUK BESERTA PILIHAN TAKARAN/VARIAN
function renderProducts(items) {
    productGrid.innerHTML = "";

    if (!items || items.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px;">
                <i class="fa-solid fa-box-open" style="font-size: 42px; color: #cbd5e1; margin-bottom: 12px; display: block;"></i>
                <h4 style="font-size: 18px; color: #1e293b; margin-bottom: 6px;">Produk Tidak Ditemukan</h4>
                <p style="color: #64748b; font-size: 14px;">Coba ketik "mie", "telur", atau "beras".</p>
            </div>
        `;
        return;
    }

    items.forEach((p) => {
        // Tentukan varian yang aktif (dari map atau default)
        const defaultVar = p.variants.find((v) => v.default) || p.variants[0];
        const activeVarId = selectedVariantMap[p.id] || defaultVar.id;
        const currentVar = p.variants.find((v) => v.id === activeVarId) || defaultVar;

        const card = document.createElement("div");
        card.className = "product-card";
        card.id = `product-card-${p.id}`;

        const badgeHtml = p.badge
            ? `<div class="card-badge-container"><span class="badge-tag ${p.badge.type}">${p.badge.text}</span></div>`
            : "";

        const originalPriceHtml = currentVar.originalPrice
            ? `<span class="original-price" id="orig-price-${p.id}">${formatRupiah(currentVar.originalPrice)}</span>`
            : `<span class="original-price" id="orig-price-${p.id}" style="display:none"></span>`;

        // Render Pilihan Takaran (Varian Buttons)
        let variantsHtml = "";
        if (p.variants.length > 1) {
            variantsHtml = `
                <div class="variant-selector-wrap">
                    <span class="variant-label"><i class="fa-solid fa-scale-balanced"></i> Pilih Ukuran / Takaran:</span>
                    <div class="variant-options">
                        ${p.variants
                            .map(
                                (v) => `
                            <button type="button" 
                                class="variant-btn ${v.id === activeVarId ? "active" : ""}" 
                                data-variant-id="${v.id}"
                                onclick="selectVariant(${p.id}, '${v.id}')">
                                ${v.name}
                            </button>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            `;
        }

        card.innerHTML = `
            ${badgeHtml}
            <div class="product-image-wrap">
                <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'">
            </div>
            <div class="product-info">
                <div class="product-meta-row">
                    <span class="product-cat">${p.category}</span>
                </div>
                <h3 class="product-title" title="${p.name}">${p.name}</h3>
                
                ${variantsHtml}

                <p class="product-spec" id="spec-${p.id}">${currentVar.spec}</p>
                <div class="product-price-box">
                    <div class="price-group">
                        ${originalPriceHtml}
                        <span class="current-price" id="price-${p.id}">${formatRupiah(currentVar.price)}</span>
                    </div>
                </div>
                <button class="btn-add-cart" onclick="addToCartByVariant(${p.id})">
                    <i class="fa-solid fa-cart-plus"></i> Tambah ke Keranjang
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// 3. FUNGSI MEMILIH VARIAN UKURAN / TAKARAN PRODUK
window.selectVariant = function (productId, variantId) {
    selectedVariantMap[productId] = variantId;

    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const variant = product.variants.find((v) => v.id === variantId);
    if (!variant) return;

    const card = document.getElementById(`product-card-${productId}`);
    if (!card) return;

    // Update tombol aktif secara presisi
    const buttons = card.querySelectorAll(".variant-btn");
    buttons.forEach((btn) => {
        if (btn.getAttribute("data-variant-id") === variant.id) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update harga & spesifikasi di kartu secara mulus
    const priceElem = document.getElementById(`price-${productId}`);
    const origPriceElem = document.getElementById(`orig-price-${productId}`);
    const specElem = document.getElementById(`spec-${productId}`);

    if (priceElem) priceElem.textContent = formatRupiah(variant.price);
    if (specElem) specElem.textContent = variant.spec;

    if (origPriceElem) {
        if (variant.originalPrice) {
            origPriceElem.style.display = "inline";
            origPriceElem.textContent = formatRupiah(variant.originalPrice);
        } else {
            origPriceElem.style.display = "none";
        }
    }
};

// 4. TOAST NOTIFIKASI
let toastTimeout;
function showToast(message) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toast.classList.add("show");
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// 5. KERANJANG BELANJA SESUAI VARIAN
window.addToCartByVariant = function (productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const activeVarId = selectedVariantMap[productId] || (product.variants.find((v) => v.default) || product.variants[0]).id;
    const variant = product.variants.find((v) => v.id === activeVarId);
    if (!variant) return;

    // Cek apakah varian produk ini sudah ada di keranjang
    const existing = cart.find((item) => item.cartItemId === variant.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            cartItemId: variant.id,
            productId: product.id,
            name: product.name,
            variantName: variant.name,
            price: variant.price,
            image: product.image,
            qty: 1
        });
    }

    updateCartUI();
    showToast(`"${product.name} (${variant.name})" ditambahkan ke keranjang`);
};

window.changeQty = function (cartItemId, delta) {
    const item = cart.find((i) => i.cartItemId === cartItemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter((i) => i.cartItemId !== cartItemId);
    }

    updateCartUI();
};

window.removeFromCart = function (cartItemId) {
    cart = cart.filter((i) => i.cartItemId !== cartItemId);
    updateCartUI();
};

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Hitung diskon voucher jika ada
    const discountAmount = appliedDiscount > 0 ? Math.round((subtotal * appliedDiscount) / 100) : 0;
    const finalTotal = Math.max(0, subtotal - discountAmount);

    cartCount.textContent = totalCount;
    cartItemCountSub.textContent = `${totalCount} item dipilih`;
    cartSubtotal.textContent = formatRupiah(subtotal);

    if (appliedDiscount > 0) {
        discountRow.style.display = "flex";
        discountPercent.textContent = `${appliedDiscount}% (${appliedVoucherCode})`;
        cartDiscount.textContent = `- ${formatRupiah(discountAmount)}`;
    } else {
        discountRow.style.display = "none";
    }

    cartTotal.textContent = formatRupiah(finalTotal);

    // Progress Free Ongkir
    if (subtotal >= FREE_ONGKIR_MIN) {
        ongkirProgress.style.width = "100%";
        ongkirProgress.style.backgroundColor = "#22c55e";
        ongkirText.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#16a34a"></i> <b>Selamat! Anda Mendapatkan Gratis Ongkir!</b>`;
    } else {
        const remaining = FREE_ONGKIR_MIN - subtotal;
        const percent = Math.min(100, Math.round((subtotal / FREE_ONGKIR_MIN) * 100));
        ongkirProgress.style.width = `${percent}%`;
        ongkirProgress.style.backgroundColor = "#16a34a";
        ongkirText.innerHTML = `<i class="fa-solid fa-truck-ramp-box"></i> Belanja <b>${formatRupiah(remaining)}</b> lagi untuk <b>Gratis Ongkir!</b>`;
    }

    // Render Items di Sidebar
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <div class="empty-icon"><i class="fa-solid fa-basket-shopping"></i></div>
                <h4>Keranjang Masih Kosong</h4>
                <p>Yuk pilih sembako kebutuhan dapur Anda sekarang!</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart
        .map(
            (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-variant"><i class="fa-solid fa-tag"></i> Takaran: <strong>${item.variantName}</strong></div>
                    <div class="cart-item-price">${formatRupiah(item.price)}</div>
                    <div class="cart-item-controls">
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="changeQty('${item.cartItemId}', -1)" aria-label="Kurangi kuantitas">−</button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn" onclick="changeQty('${item.cartItemId}', 1)" aria-label="Tambah kuantitas">+</button>
                        </div>
                        <button class="remove-item-btn" onclick="removeFromCart('${item.cartItemId}')" title="Hapus barang">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
        )
        .join("");
}

// 6. BUKA & TUTUP KERANJANG
function openCart() {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// 7. VOUCHER DISKON
function applyVoucher(code) {
    const trimmed = (code || "").trim().toUpperCase();
    if (trimmed === "HEMAT10") {
        appliedDiscount = 10;
        appliedVoucherCode = "HEMAT10";
        voucherMessage.className = "voucher-msg success";
        voucherMessage.textContent = "✓ Voucher HEMAT10 berhasil dipakai! Diskon 10% diterapkan.";
        updateCartUI();
        showToast("Voucher HEMAT10 berhasil digunakan!");
    } else {
        voucherMessage.className = "voucher-msg error";
        voucherMessage.textContent = "✕ Kode voucher tidak valid atau sudah kedaluwarsa.";
    }
}

applyVoucherBtn.addEventListener("click", () => {
    applyVoucher(voucherInput.value);
});

voucherInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        applyVoucher(voucherInput.value);
    }
});

if (voucherTag) {
    voucherTag.addEventListener("click", () => {
        voucherInput.value = "HEMAT10";
        openCart();
        applyVoucher("HEMAT10");
    });
}

// 8. FILTER KATEGORI
let currentCategory = "all";

catPills.forEach((pill) => {
    pill.addEventListener("click", () => {
        catPills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");

        currentCategory = pill.getAttribute("data-category");
        filterAndRender();
    });
});

// 9. PENCARIAN CEPAT
function filterAndRender() {
    const keyword = searchInput.value.toLowerCase().trim();

    if (keyword.length > 0) {
        clearSearchBtn.style.display = "block";
    } else {
        clearSearchBtn.style.display = "none";
    }

    const filtered = products.filter((p) => {
        const matchCategory = currentCategory === "all" || p.category === currentCategory;
        const matchKeyword =
            p.name.toLowerCase().includes(keyword) ||
            p.category.toLowerCase().includes(keyword) ||
            p.variants.some((v) => v.name.toLowerCase().includes(keyword) || v.spec.toLowerCase().includes(keyword));
        return matchCategory && matchKeyword;
    });

    renderProducts(filtered);
}

searchInput.addEventListener("input", filterAndRender);

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterAndRender();
    searchInput.focus();
});

// 10. CHECKOUT KE WHATSAPP DENGAN TAKARAN DETAIL
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Keranjang belanja Anda masih kosong! Silakan pilih sembako terlebih dahulu.");
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discountAmount = appliedDiscount > 0 ? Math.round((subtotal * appliedDiscount) / 100) : 0;
    const finalTotal = Math.max(0, subtotal - discountAmount);
    const isFreeOngkir = subtotal >= FREE_ONGKIR_MIN;

    let text = `*Halo Toko Indorapet, saya mau pesan sembako:*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;

    cart.forEach((item, index) => {
        const itemSub = item.price * item.qty;
        text += `${index + 1}. *${item.name}*\n   📦 Takaran: ${item.variantName}\n   🛒 ${item.qty}x @ ${formatRupiah(item.price)} = ${formatRupiah(itemSub)}\n\n`;
    });

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Subtotal:* ${formatRupiah(subtotal)}\n`;

    if (appliedDiscount > 0) {
        text += `*Diskon Voucher (${appliedVoucherCode}):* -${formatRupiah(discountAmount)}\n`;
    }

    text += `*Status Ongkir:* ${isFreeOngkir ? "🎉 GRATIS ONGKIR" : "Tarif Reguler"}\n`;
    text += `*TOTAL PEMBAYARAN:* ${formatRupiah(finalTotal)}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    text += `*Nama Penerima:* \n`;
    text += `*Alamat Lengkap:* \n`;
    text += `*Metode Pembayaran:* [COD / QRIS / Transfer Bank]\n\n`;
    text += `Mohon segera diproses ya kak. Terima kasih! 🙏`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
});

// Render awal
renderProducts(products);
updateCartUI();