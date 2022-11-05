function Dog(nama,warna) {
    this.name = nama, //own properti
    this.color = warna,
    this.numLegs = 4
  }
let anjing = new Dog("tai", "merah")
let hound = new Dog("Serigala", "abu2")
console.log(hound.name, hound.color)

// MEMAHAMI OWN PROPERTY
let arrui = []
for(let proprti in anjing){
    if(anjing.hasOwnProperty(proprti)){
            arrui.push(proprti)
    }
}
console.log(arrui)



// * verify instanceof 
console.log(anjing instanceof Dog)

// PERLU DIINGAT BAHWA UNTUK MEMBUAT CONSTRUCTOR FUNGSI 
// TIDAK BISA MENGGUNAKAN ARROW FUNC
function contoh (){
    this.name = "coba"
}
// tidak bisa di akses itu kenapa kita harus menggunakan new operator
console.log(contoh.name)


// contoh penggunaan prototype
Dog.prototype.kelamin = "apa tuh" // prototype properti
console.log("prototipe: ",hound.kelamin)

// * Change the Prototype to a New Object
// ! side effect dari settip prototype to a new object, constructor properti akan terhapus
Dog.prototype = {
    constructor: Dog,
    numLegp: 2,
    describe: "pler",
}
const data = new Dog()
console.log(hound.describe)
// "mengubah prototipe ke objek baru yg di kopi dari previos Dog"
// ! kenapa hound.describe undefined walau sudah assign variable to Dog constructor,
// ! karena saaat prototipe membuat objek baru maka construktor sebelumnya akan terhapus
// ! dan harus buat variable baru dibawah prototipe new object
console.log("change prototipe:",data.describe)

let ownProperti = [];
let prototipe = [];

for(let properti in hound) {
    if(hound.hasOwnProperty(properti)) {
        ownProperti.push(properti)
    } else {
        prototipe.push(properti)
    }
}

console.log(`ownProperti: ${ownProperti} \nprototipe: ${prototipe}`)


// * inherit behaviors from a supertype
// parrent(supertype)
function Animal() { }

// membuat sebuah objek baru/menambhkan objek baru kedalam Animal fungsi
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Object.create(obj), mengambil warisan dari parent
// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype);; // Change this line

duck.eat()

// SETEL PROTIPPE ANAK (SUBTYPE) KE SUPERTYPE (PARENT)
function Animals() { }

Animals.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animals.prototype)
//! Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Dog now includes all the key "ingredients" from Animal.

let beagl = new Dog();

beagl.eat()


// ADD METHOD AFTER INHERITANCE
function Buah() { }

Buah.prototype = {
    constructor: Buah,
    makan: ()=> {
        console.log("makan yuk")
    }
}
// diturunin
function Warung() {}
// membuat objek baru kedalam constructor warung
Warung.prototype = Object.create(Buah.prototype)
// set konstruktor warung
Warung.prototype.constructor = Warung

Warung.prototype.fungsi = ()=>{
    console.log("ini fungsi")
} 

let lapak = new Warung;
lapak.fungsi()


// OVERRIDE INHERITED METHOD
function Ganti() {}

Ganti.prototype = Object.create(Buah.prototype)
Ganti.prototype.constructor = Ganti

Ganti.prototype.makan = () => {
    return "diganti"
}

let change = new Ganti;
console.log(change.makan())


// Use a Mixin to Add Common Behavior Between Unrelated Objects
// As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. 
// Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  const glideMixin = (obj)=>{
    obj.glide = function() {
      console.log("terbang")
    }
  }
  
  glideMixin(bird)
  glideMixin(boat)

  // console.log(bird)
  


  // Use Closure to Protect Properties Within an Object from Being Modified Externally
  function Bird() {
    let hatchedEgg = 10;
  
    this.getHatchedEggCount = function() { 
      return console.log(hatchedEgg)
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount();
  

  // Understand the Immediately Invoked Function Expression (IIFE)
  // SEPERTI USEEFFECT
  (function makeNest() {
    console.log("A cozy nest is ready");
  })()

  
  // MEMBUAT SINGLE OBJECT ATAU MODULE DENGAN IMMEDIATELY INVOKED FUNCTION EXPRES (IIFE)

let bebek = {

}

let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return console.log("kage gw")
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }

  }
  
})();

funModule.isCuteMixin(bebek)
bebek.isCute()