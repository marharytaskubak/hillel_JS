const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington'],
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(array, tableName){
    let i = 0
    document.write(`<div class = name>${tableName} info</div>`)
    for (i => 0; i < array.length; i++){
        let picture = array[i][0] 
        let type = array[i][1] 
        let name = array[i][2]  
        document.write(`
        <div class = wrapper>
        <div class = element>${picture}</div>
        <div class = element>${type}</div>
        <div class = element>${name}</div>
        </div>
        `)
    }
}
getInfo(animals, 'Animals')
getInfo(food, `Food`);
getInfo(universes, `Universes`);


