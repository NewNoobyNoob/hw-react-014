//! in REACT typscript project nothing could be saved within SRC folder, hence my info file I moved to main project directory!

// Explicit typing არის როცა ჩვენ ვეუბნებით typescripts კოდს თუ რა ტიპის უნდა იყოს ცვლადი მიუხედავად მისი გარეგნული/ვიზუალური კუთვნილებისა. კუთვნილების მინიჭება ხდება ცვლადის მერე (:) ორი წერტილისა და ტიპის დაწერისა. მისი გადაწერა შეუძლებელია. თან ჯავსკტიპტისაგან განსხვავებით სადაც შეცდომა კონსოლში უნდა გვენახა, აქ ის მყისიერად გამოჩნდება (მაგ: თუ const ცვლადის გადაწერა მოგვინდება დავინახავთ რომ ის წითლად არის ხაზგასმული და თუ კურსორს მივიტანთ განმარტებასაც მივიღებთ ყოველგვარი კონსოლში შესვლის გარეშე)

// Implicit typing არის როცა მნიშვნელობის მიხედვით ტაიპსკრიპტი თვითონ ანიჭებს ტიპს (როგორც ახლა ახლა მუშაობს ჯავასკრიპტი)

// example #1
const a:number = 5;
// a = 7; // Cannot assign to 'a' because it is a constant.

// example #1
let b:number = 20;
// b = "20"; // Type 'string' is not assignable to type 'number'.
// ჩვეულებრივი ჯავასკრიპტი ამის გაკეთების საშუალებას მოგვცემდა
//! ანუ პირველ ორ მაგალითში ცვლადზე აშკარად (explicitly) არის მითითებული ტიპი, შესაბამისად აქ კოდი explicit  არის!

// example #3
let c = 30;
// c = "30"; // Type 'string' is not assignable to type 'number'. ანუ მიუხედავად იმისა რომ მე ცვლადს არ გავუწერე ტიპი (:) ორი წერტილისა და შესაბამისი ტექსტის მიწერით, ტაიპსკრიპტი მიხვდა რომ ცვლადის ახალი ტიპი არ შეესაბამება თავიდან გაწერილს ამიტომაც არ მოგვცა მისი გაწერის/შეცვლის შესაძლებლობა მიუხედავად იმისა რომ ცვლადი let გასაღები სიტყვით/ქივორდით იყო დეკლარირებული და არა const ქივორდით 
//! ანუ აქ კოდი თავისთავად (implicitely) ჩანს რა ტიპის არის, შესაბამისად ეს კოდი implicit არის!

let d : boolean = true;
let e : string = "abcdef";
let f : boolean = true;

// we can define also arrays with common element/data type inside

const array : number[] = [1, 2, 3, 4, 5];
const arrayString : string[] = ["1", "2", "3", "4", "5"];
const arrayBoolean : boolean[] = [true, 10>3, 10<3, false];

// or we can do the same using different format like below
const arrayArray : Array<number> = [1, 2, 3]
const arrayNewString : Array<string> = ["1", "2", "3"]
const arrayNewBoolean : Array<boolean> = [true, 10>3, false]

// unlike javascript where you can have different type of elements within single array (like, number, string, boolean etc.), although this practice is not reccomended at all, in typescript you can have only specific type of elements within array

// any is the worst data type typescript has

let anyval : any = 3;
anyval = "string";
anyval = true;
anyval = null;

// we can have array with different element types in typescript if we indicate type as any while declaring variable (although this is not highly recommended as already said above)

const myANyVar : any[] = [7, true, "city"];

// if we remove [] array square brackets at variable declaration, than we can even indicate any type of elements/data not only within array, but within the set.

// example #

const anyFunction = (el) => {
    console.log(el)
}

//! ბიბლიოთეკების ტპიზირებას ჩვენ თვითონ არ ვაკეთებთ
// როგორც წესი თავად ბიბლიოთეკას მოყვება ტიპიზაცია ან შექმნელი გვეუბნება აქა და აქ არის და ნახეთო. ასე მაგალითად, როდესაც ვაკეთებთ <npm install react-router-dom> შეგვიძლია ამ პაკეტის ოფიციალურ საიტზე <www.npmjs.com>-ზე ვნახოთ თუ react-router-dom-ს აქვს TS სახელწოდების გასწვრივ, მაშინ ეს პაკეტი ტიპიზირებულია და აქ არის ტიპები.
// იმ შემთხვევაში თუ რომელიმე პაკეტს არ მოყვება ტიპიზაცია, მაგ: <npm install multer> (თუ multer-ს ავკრიფავთ www.npmjs.com-ზე და მივცემთ search-ში თავადაც ადვილად დავრწმუნდებით), მაშინ დამატებით უნდა გავუშვათ ტიპიზაციის დამეტებისათვის აუცილებელი ბრძანება. multer-ის შემთხვევაში იქნება <npm install -- save -dev @types/multer>

// მას შემდეგ რაც დავაყენებთ <npm install react-router-dom>-ს შეგვიძლია ვნახოთ როგორ მუშაობს ეს ყველაფერი სინამდვილეში. შევქმნათ საცდელად რამოდენიმე ფეიჯი და შემდეგ გავუწეროთ მათ route-ები

