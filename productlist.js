const productListArray= [
    {id: 1, productName: "Espelho Retrovisor Jetta", productBrand: "Gilbrand Automotive",classProduct: "Automotivo", classId: 3, productPrice: `725,00`, productDescription: "Par Retrovisor Jetta Ano 2015, Marca Gilbrand Automotive" },
    {id: 2, productName: "Calça Jeans Masculina", productBrand: "Calvin Klein", classProduct: "Vestuario", classId: 4, productPrice: `290,00`, productDescription: "Calça Masculina tipo jeans, estilo reta, tamanho 42" },
    {id: 3, productName: "Capa celular", productBrand: "Xiang Shin", classProduct: "Eletronicos", classId: 2, productPrice: `15,00`, productDescription: "capa de celular, Sansung a5, 5pol, poliuretano" },
    {id: 4, productName: "Retentor oleo", productBrand: "Nakata",classProduct: "Automotivo", classId: 3, productPrice: `18,49`,productDescription: "Retentor Nakata, reposição marcas VW, diâmetro 2 1/2pol cód referencia 625451" },
    {id: 5, productName: "Carregador Xiaomi", productBrand: "Xiaomi", classProduct: "Eletronicos", classId: 2, productPrice: `45,00`, productDescription: "Carregador celular Xiaomi, produto original, 1500mAH" },
    {id: 6, productName: "Mouse laser Logitech", productBrand: "Logitech", classProduct: "Eletronicos", classId: 2, productPrice: `29,50`,productDescription: "Mouse para notebook ou desktop Logitech, pequeno. Tipo Wireless" },
    {id: 7, productName: "Caixa de som Xing Lang", productBrand: "Xing Lang", classProduct: "Eletronicos", classId: 2, productPrice: `74,90`, productDescription: "Caixa de som, 65Watts, bateria longa duração." },
    {id: 8, productName: "Camisa lisa branca masculina", productBrand: "GAP", classProduct: "Vestuario", classId: 4, productPrice: `145,00`, productDescription: "camiseta branca lisa, logo pequeno, tamanho M, marca GAP" },
    {id: 9, productName: "Boné Nike", productBrand: "Nike", classProduct: "Vestuario", classId: 4, productPrice: `68,90`, productDescription: "Boné azul, marca nike, a prova de água e transpiração. protege raios UV" },
    {id: 10, productName: "Headphone Gamer JBL", productBrand: "JBL", classProduct: "Eletronicos", classId: 2, productPrice: `319,90`, productDescription: "Headphone gamer preto, marca JBL. Possui filtro ruido e microfone." },
    {id: 11, productName: "Monitor 27 LG" , productBrand: "LG", classProduct: "Eletronicos", classId: 2, productPrice: `1239,90`, productDescription: "Monitor Gamer LG tela plana 27 polegadas 144hz" },
    {id: 12, productName: "Bolsa Mulher Rosa Chique", productBrand: "Mulher Rosa Chique", classProduct: "Vestuario", classId: 4, productPrice: `334,90`, productDescription: "Bolsa Mulher Rosa Chique, couro sintético, acompanha carteira. Cor rosa." },
    {id: 13, productName: "Chinelo Havaianas edição especial copa", productBrand: "Havaianas", classProduct: "Vestuario", classId: 4, productPrice: `45,90,`, productDescription: "Chinelo Havaianas edição especial Copa 2022. Bandeira Brasil. Tamanho 42" },
    {id: 14, productName: "Oculos Solar Okley", productBrand: "Okley", classProduct: "Vestuario", classId: 4, productPrice: `299,00`, productDescription: "Oculos Okley, estilo esporte. Cor preta." },
    {id: 15, productName: "Cinto couro masculino ", productBrand: "Couro Brasil", classProduct: "Vestuario", classId: 4, productPrice: `89,90`, productDescription: "Cinto masculino couro cor marrom, tamanhos 38 a 44" },
    {id: 16, productName: "Filtro Ar Chevrolet", productBrand: "Nakata",classProduct: "Automotivo", classId: 3, productPrice: `74,90`, productDescription: "Filtro de Ar, marca chevrolet ano 2011, marca Nakata" },
    {id: 17, productName: "Pneu Goodyear Aro 15", productBrand: "Goodyear",classProduct: "Automotivo", classId: 3, productPrice: `449,90`, productDescription: "Pneu Goodyear Aro 15" },
    {id: 18, productName: "Cambio VW Golf ano 2018", productBrand: "VW",classProduct: "Automotivo", classId: 3, productPrice: `2449,90`, productDescription: "Cambio VW Golf ano 2018, usado em ótimas condições. Aceito oferta" },
    {id: 19, productName: "Óleo motor, Shell 40W15 especial", productBrand: "Shell",classProduct: "Automotivo", classId: 3, productPrice: `132,45`, productDescription: "óleo motor shell, 1.5L. tipo 40W15, com aditivos. Especial. Ano 2023" },
    {id: 20, productName: "Palheta Ford Focus, ano 2013, Bosch", productBrand: "Bosch",classProduct: "Automotivo", classId: 3, productPrice: `105,00`, productDescription: "Palheta reposição Bosch, para marcas Ford Focus ano 2013, 2014 e 2015" },
    {id: 21, productName: "Jaqueta Corta Vento Nike", productBrand: "Nike", classProduct: "Vestuario", classId: 4, productPrice: `319,90`, productDescription: "Jaqueta Corta Vento Nike. Tamanho 42, cor preta"},
    {id: 22, productName: "Conjunto Meias Masculinas", productBrand: "Lupo", classProduct: "Vestuario", classId: 4, productPrice: `54,99`, productDescription: "Conjunto meias Lupo, 3 pares, tamanhos 38 a 44"},
    {id: 23, productName: "Tapete bandeja PVC Corolla Cross", productBrand: "Equinox",classProduct: "Automotivo", classId: 3, productPrice: `145,90`, productDescription: "Tapete bandeja PVC marca Equinox, possui todos os assentos. Para uso no Toyotta Corolla Cross 2018" },
    {id: 24, productName: "Amortecedor Gol VW G4", productBrand: "Cofap",classProduct: "Automotivo", classId: 3, productPrice: `230,00`, productDescription: "Amortecedor Gol G2 G3 e G4, marca Cofap." },
    {id: 25, productName: "Kit Par Bandeja Dianteira Fusion 2013 a 2017", productBrand: "HRA Components",classProduct: "Automotivo", classId: 3, productPrice: `1324,90`, productDescription: "Kit Par Bandeja Dianteira Fusion 2013 a 2017." },
    {id: 26, productName: "Oculos Ray ban", productBrand: "Ray ban", classProduct: "Vestuario", classId: 4, productPrice: `389,90`, productDescription: "Oculos Rayban, lente metalica, cor prata." },
    {id: 27, productName: "Tênis Asycs Esporte cinza", productBrand: "Asycs", classProduct: "Vestuario", classId: 4, productPrice: `425,00`, productDescription: "Tênis Asycs cinza, edição corrida maratona" },
    {id: 28, productName: "Fonte Notebook Lenovo AWE342P" , productBrand: "Lenovo", classProduct: "Eletronicos", classId: 2, productPrice: `273,99`, productDescription: "Fonte Notebook Lenovo AWE342P, cor preta, 1 ano de garantia." },
    {id: 29, productName: "HD Externo 1Tb Seagate" , productBrand: "Seagate", classProduct: "Eletronicos", classId: 2, productPrice: `419,00`, productDescription: "HD Externo 1Tb Seagate" },
    {id: 30, productName: "kit 3 camisetas lisas coloridas ", productBrand: "Cotton Wear", classProduct: "Vestuario", classId: 4, productPrice: `99,90`, productDescription: "kit 3 camisetas lisas coloridas, algodão e poliester. Cores branca, azul e cinza. Tamanho G" },
    {id: 31, productName: "tênis Adiddas branco clássico", productBrand: "Addidas", classProduct: "Vestuario", classId: 4, productPrice: `364,99`, productDescription: "tênis Adiddas branco clássico, tamanho 42" },
    {id: 32, productName: "Pen Drive 32gb" , productBrand: "SanDisk", classProduct: "Eletronicos", classId: 2, productPrice: `35,90`, productDescription: "Pen Drive 32gb, marca SanDisk, Ultra Dual" },

]

const productListImage=[
    { id: 1, img: "0001.jpg" },
    { id: 2, img: "0002.jpg" },
    { id: 3, img: "0003.jpg" },
    { id: 4, img: "0004.jpg" },
    { id: 5, img: "0005.jpg" },
    { id: 6, img: "0006.jpg" },
    { id: 7, img: "0007.jpg" },
    { id: 8, img: "0008.jpg" },
    { id: 9, img: "0009.jpg" },
    { id: 10, img: "0010.jpg" },
    { id: 11, img: "0011.jpg" },
    { id: 12, img: "0012.jpg" },
    { id: 13, img: "0013.jpg" },
    { id: 14, img: "0014.jpg" },
    { id: 15, img: "0015.jpg" },
    { id: 16, img: "0016.jpg" },
    { id: 17, img: "0017.jpg" },
    { id: 18, img: "0018.jpg" },
    { id: 19, img: "0019.jpg" },
    { id: 20, img: "0020.jpg" },
    { id: 21, img: "0021.jpg" },
    { id: 22, img: "0022.jpg" },
    { id: 23, img: "0023.jpg" },
    { id: 24, img: "0024.jpg" },
    { id: 25, img: "0025.jpg" },
    { id: 26, img: "0026.jpg" },
    { id: 27, img: "0027.jpg" },
    { id: 28, img: "0028.jpg" },
    { id: 29, img: "0029.jpg" },
    { id: 30, img: "0030.jpg" },
    { id: 31, img: "0031.jpg" },
    { id: 32, img: "0032.jpg" },
];