const defaultState = [
  {
    id: 1,
    name: "Geladeira",
    image:
      "https://mytechshop.lojavirtualfc.com.br/lojas/00035189/prod/TTec006A1.png",
    price: 200,
  },
  {
    id: 2,
    name: "Fogão",
    image:
      "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=925955974",
    price: 640,
  },
  {
    id: 3,
    name: "Máquina de lavar",
    image:
      "https://compracerta.vtexassets.com/arquivos/ids/212207/Brastemp_Lavadora_BWK12A9_Imagem_Frontal.jpg?v=636996840297630000",
    price: 420,
  },
  {
    id: 4,
    name: "luminária",
    image:
      "https://images.tcdn.com.br/img/img_prod/759969/luminaria_de_mesa_articulada_empire_1521_1_20200820193239.jpg",
    price: 45,
  },
  {
    id: 5,
    name: "Televisor",
    image:
      "https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/t/v/tv_led_39_aiwa_aw39b4sm_-_1_1.jpg",
    price: 500,
  },
  {
    id: 6,
    name: "Celular",
    image:
      "data:image/jpeg;base64,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",
    price: 340,
  },
  {
    id: 7,
    name: "NoteBook",
    image:
      "data:image/jpeg;base64,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",
    price: 730,
  },
  {
    id: 8,
    name: "Cafeteira",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61XxOI6uACL._AC_SL1000_.jpg",
    price: 80,
  },
  {
    id: 9,
    name: "Cama",
    image:
      "https://www.lojasguaibim.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/8/0/804653_1_13-07-2020-120804.jpg_11.jpg",
    price: 280,
  },
];

const lojaReducer = (state = defaultState) => {
  return state;
};

export default lojaReducer;
