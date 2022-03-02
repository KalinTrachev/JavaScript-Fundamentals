function cats(catsAsString) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let catAsString of catsAsString) {

        let [catName, catAge] = catAsString.split(' ');
        let cat = new Cat(catName, catAge);

        cat.meow()
    }
}
cats(['Mellow 2', 'Tom 5'])