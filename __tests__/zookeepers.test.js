const fs = require('fs');

const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require("../lib/zookeepers");

const { zookeepers } = require("../data/zookeepers.json");

jest.mock('fs');

test("creates a zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darryl", id: "onemore" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Darryl");
    expect(zookeeper.id).toBe("onemore");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Erica",
            age: 31,
            favoriteAnimal: "penguin"
        },
        {
            id: "4",
            name: "Noel",
            age: 28,
            favoriteAnimal: "lion"
        },
    ];

    const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Erica",
            age: 31,
            favoriteAnimal: "penguin"
        },
        {
            id: "4",
            name: "Noel",
            age: 28,
            favoriteAnimal: "lion"
        },
    ];
    
    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Erica");
});

test("validates age", () => {
    const zookeeper = {
            id: "3",
            name: "Erica",
            age: 31,
            favoriteAnimal: "penguin",
        };

    const invalidZookeeper = {
            id: "4",
            name: "Noel",
            age: "28",
            favoriteAnimal: "lion",
        };
    
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});