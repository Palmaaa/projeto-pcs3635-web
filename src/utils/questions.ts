export interface IQuestion {
    question: string;
    answers: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    correctAnswer: string;
}

export const questions: IQuestion[] = [
    {
        question: 'Qual é o nome do maior rio do mundo em volume de água?',
        answers: {
            a: 'Rio Amazonas',
            b: 'Rio Nilo',
            c: 'Rio Yangtze',
            d: 'Rio Mississippi'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Qual o maior país do mundo em área territorial?',
        answers: {
            a: 'Estados Unidos',
            b: 'Rússia',
            c: 'Brasil',
            d: 'China'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Qual é a capital do Chile?',
        answers: {
            a: 'Bogotá',
            b: 'Santiago',
            c: 'Lima',
            d: 'Buenos Aires'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Qual é o nome da primeira mulher a ganhar um Prêmio Nobel?',
        answers: {
            b: 'Marie Curie',
            a: 'Rosalind Franklin',
            c: 'Ada Lovelace',
            d: 'Dorothy Hodgkin'
        },
        correctAnswer: 'b'
    },
    {
        question:
            'Qual é o nome do famoso quadro de Leonardo da Vinci que retrata uma mulher sorrindo?',
        answers: {
            a: 'A Última Ceia',
            b: 'A Criação de Adão',
            c: 'Mona Lisa',
            d: 'A Noite Estrelada'
        },
        correctAnswer: 'c'
    },
    {
        question:
            'Qual é o nome da famosa estação espacial que orbita a Terra?',
        answers: {
            a: 'ISS',
            b: 'Soyuz',
            c: 'Chandrayaan-1',
            d: 'Hubble'
        },
        correctAnswer: 'a'
    },
    {
        question: "Qual é o nome do autor do livro 'O Pequeno Príncipe'?",
        answers: {
            a: 'Antoine de Saint-Exupéry',
            b: 'Marcel Proust',
            c: 'Gustave Flaubert',
            d: 'Victor Hugo'
        },
        correctAnswer: 'a'
    },
    {
        question:
            'Qual é o nome do principal escritor brasileiro da literatura de cordel?',
        answers: {
            a: 'Machado de Assis',
            b: 'Ariano Suassuna',
            c: 'Patativa do Assaré',
            d: 'Guimarães Rosa'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Qual é o nome do maior desfiladeiro do mundo?',
        answers: {
            d: 'Grand Canyon',
            b: 'Cânion do Xingó',
            c: 'Cânion do Itaimbezinho',
            a: 'Cânion de Colca'
        },
        correctAnswer: 'd'
    },
    {
        question:
            "Qual é o nome do personagem principal do livro '1984', de George Orwell?",
        answers: {
            a: 'Winston Smith',
            b: 'John Savage',
            c: 'Guy Montag',
            d: 'David Bowman'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Qual é o nome do primeiro satélite artificial da Terra?',
        answers: {
            a: 'Sputnik 1',
            b: 'Explorer 1',
            c: 'Telstar 1',
            d: 'Apollo 11'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Qual é o maior deserto do mundo?',
        answers: {
            a: 'Deserto de Gobi',
            b: 'Deserto do Saara',
            c: 'Deserto da Patagônia',
            d: 'Deserto do Atacama'
        },
        correctAnswer: 'b'
    },
    {
        question:
            'Qual é o nome da primeira mulher a ser eleita presidente do Brasil?',
        answers: {
            c: 'Dilma Rousseff',
            a: 'Marina Silva',
            b: 'Tabata Amaral',
            d: 'Luiza Erundina'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Qual é a capital do Brasil?',
        answers: {
            a: 'São Paulo',
            b: 'Rio de Janeiro',
            c: 'Brasília',
            d: 'Salvador'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Qual é o nome da maior cordilheira do mundo?',
        answers: {
            a: 'Montanhas Rochosas',
            b: 'Cordilheira dos Andes',
            c: 'Himalaias',
            d: 'Cordilheira dos Alpes'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        answers: {
            a: 'Júpiter',
            b: 'Saturno',
            c: 'Netuno',
            d: 'Urano'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Qual é o menor país do mundo em área territorial?',
        answers: {
            a: 'Mônaco',
            b: 'Vaticano',
            c: 'San Marino',
            d: 'Andorra'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Qual é a montanha mais alta do mundo?',
        answers: {
            a: 'Monte Everest',
            b: 'Monte Kilimanjaro',
            c: 'Monte Aconcágua',
            d: 'Monte Denali'
        },
        correctAnswer: 'a'
    },
    {
        question: "Quem é o autor da obra 'Dom Casmurro'?",
        answers: {
            a: 'Machado de Assis',
            b: 'Carlos Drummond de Andrade',
            c: 'Cecília Meireles',
            d: 'Clarice Lispector'
        },
        correctAnswer: 'a'
    },
    {
        question:
            'Qual é o nome do navegador português que descobriu o caminho marítimo para as Índias?',
        answers: {
            a: 'Cristóvão Colombo',
            b: 'Vasco da Gama',
            c: 'Fernão de Magalhães',
            d: 'Pedro Álvares Cabral'
        },
        correctAnswer: 'b'
    }
];
