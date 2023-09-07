const animals = [
    "dog",
    "bunny",
    "cat",
    "bird",
    "kangaroo",
    "guinea pig",
    "koala",
    "dove",
    "cute bear",
    "duck",
    "goose",
    "cow",
    "chicken",
    "beaver",
    "hamster",
    "peacock",
    "camel",
    "horse",
    "lion",
    "deer",
    "lamb",
    "goat",
    "butterfly"
];

const scenery = [
    "strawberry field",
    "fruitful garden",
    "colorful crop with tall trees",
    "beach with a blue sea",
    "mountain at the sunset",
    "desert with an oasis",
    "kitchen with a table set for a tea party"
]

export default () => {
    const animalsShuffledArray = animals.sort(() => 0.5 - Math.random()); 
    const sceneryShuffledArray = scenery.sort(() => 0.5 - Math.random()); 
    const randomAnimals = animalsShuffledArray.slice(0, 2);
    const randomScenery = sceneryShuffledArray[0];

    return `A ${randomAnimals[0]} and a ${randomAnimals[1]} at a ${randomScenery}`;
}