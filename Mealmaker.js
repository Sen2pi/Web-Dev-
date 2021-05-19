const menu ={
    _courses:{
      appetizers: [],
      mains: [],
      desserts: [],  
      },
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(appetizers){
        this._courses.appetizers = appetizers
    }, 
    set mains(mains){
        this._courses.mains = mains
    },
    set desserts(desserts){
        this._courses.desserts = desserts
    },
    get courses(){
      return{
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
        };
    },
    addDishToCourse(courseName, dishName,dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    }, 
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
  generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
   
      return `O teu Prato hoje é ${appetizer.name}, ${main.name} e ${dessert.name} e o preço final dele é ${totalPrice}€.`;
    },
  };
  menu.addDishToCourse('appetizers','Pão com Peperroni', 3.50);
  menu.addDishToCourse('appetizers','Azeitonas',1.50)
  menu.addDishToCourse('appetizers','Coxinhas de Frango',4.00);
  menu.addDishToCourse('appetizers','Pão de Alho',3.00);
  
  menu.addDishToCourse('mains','Sparguetti Raggu',5.00);
  menu.addDishToCourse('mains','Salada Russa',5.00);
  menu.addDishToCourse('mains','Arroz de Cabidela',5.00);
  menu.addDishToCourse('mains','Cozido á Portuguesa',8.00);
  
  menu.addDishToCourse('desserts','Tiramissu',3.50);
  menu.addDishToCourse('desserts','Tarte de Limão',3.50);
  menu.addDishToCourse('desserts','Red Velver',3.50);
  menu.addDishToCourse('desserts','Douce do Céu',3.50);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);