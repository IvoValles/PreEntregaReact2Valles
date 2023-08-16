const data = [
    
        {
          id: 1,
          nombre: "Zapatillas Le Coq Sportif R1000",
          precio: 37000,
          stock: 8,
          tipo: "zapatilla",
          imagen: "img/foto1.jpg"
        },
        {
          id: 2,
          nombre: "Zapatillas New Balance 574",
          precio: 46000,
          stock: 10,
          tipo: "zapatilla",
          imagen: "img/foto2.jpg"
        },
        {
          id: 3,
          nombre: "Zapatillas New Balance ML574LGI",
          precio: 41000,
        stock: 7,
          tipo: "zapatilla",
          imagen: "img/foto3.jpg"
        },
        {
          id: 4,
          nombre: "Darcy Suela Marron",
          precio: 31000,
        stock: 8,   
          tipo: "bota",
          imagen: "img/foto4.jpg"
        },
        {
          id: 5,
          nombre: "Bota Negra Vizzano",
          precio: 18000,
          stock: 11,
          tipo: "bota",
          imagen: "img/foto5.jpg"
        },
        {
          id: 6,
          nombre: "Bota Marron Vizzano",
          precio: 19000,
          stock: 9,
          tipo: "bota",
          imagen: "img/foto6.jpg"
        },
        {
          id: 7,
          nombre: "Zapatillas Nike Venture",
          precio: 38000,
          stock: 12,
          tipo: "zapatilla",
          imagen: "img/foto7.jpg"
        },
        {
          id: 8,
          nombre: "Zapatillas Adidas Galaxy 6",
          precio: 33000,
          stock: 19,
          tipo: "zapatilla",
          imagen: "img/foto8.jpg"
        },
        {
          id: 9,
          nombre: "Zapatillas Running Under Armour",
          precio: 58000,
        stock: 10,
          tipo: "zapatilla",
          imagen: "img/foto9.jpg"
        }
      ]

export const getData = () => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 1000)
    })
}