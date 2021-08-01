const uuid = require('uuid');

exports.data = {
    inventory: [
        {
            id: uuid.v4(),
            name: "Гиря",
            isInGoodContion: true,
            quantity: 17,
            weight: 15,
            producedBy: "TOP",
        },
        {
            id: uuid.v4(),
            name: "Штанга",
            isInGoodContion: false,
            quantity: 10,
            weight: 5,
            producedBy: "Циркуль",
        },
        {
            id: uuid.v4(),
            name: "Турник",
            isInGoodContion: true,
            quantity: 8,
            weight: 10,
            producedBy: "TOP",
        },
        {
            id: uuid.v4(),
            name: "Беговая дорожка",
            isInGoodContion: true,
            quantity: 25,
            weight: 0.2,
            producedBy: "Run Technologies",
        },
    ],

    trainers: [
        {
            id: uuid.v4(),
            name: "Виталий Андреевич",
            age: 32,
            specialization: "Йога",
            wage: 30000,
        },
        {
            id: uuid.v4(),
            name: "Анастасия Сергеевна",
            age: 28,
            specialization: "Фитнес",
            wage: 25000,
        },
        {
            id: uuid.v4(),
            name: "Александр Тихонович",
            age: 45,
            specialization: "Боевое самбо",
            wage: 35000,
        },
        {
            id: uuid.v4(),
            name: "Дмитрий Анатольевич",
            age: 40,
            specialization: "Бокс",
            wage: 40000,
        },
    ],
}