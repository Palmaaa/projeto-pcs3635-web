import { questions } from './questions';

export const getRandomQuestion = (sortedIds: number[]) => {
    let id;
    do {
        id = Math.floor(Math.random() * questions.length);
    } while (sortedIds.includes(id));

    console.log(sortedIds);

    return { q: questions[id], x: id };
};
