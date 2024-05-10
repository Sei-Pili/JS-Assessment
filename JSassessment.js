 /*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling) {
   const NFT = {
      "name": _name,
      "eyeColor": _eyeColor,
      "shirtType": _shirtType,
      "bling": _bling
   }


   NFTs.push(NFT);
   console.log("Minted: " + _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for (let i = 0; i < NFTs.length; i++) {
      console.log("\nID: \t\t " +(i + 1));
      console.log("Name: \t\t" + NFTs[i].name); 
      console.log("Eyecolor: \t" + NFTs[i].eyeColor);
      console.log("Shirt Type: \t" + NFTs[i].shirtType);
      console.log("Bling: \t\t" + NFTs[i].bling);
   }  
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log(NFTs.length);

}

// call your functions below this line
  // let me cook // This is creates an NFT with a random combination of values.
    function getRandomElement(array){
        const randomIndex = Math.floor(Math.random() * array.length); // generate random index from array length
         return array[randomIndex]; // return the element at the random index
}
    // Arrays filled with possible combinations for your nft
    const possibleNames = ["Bob","Sue","Tim","Jogn","Franklin","Michael","Trevor"];
    const possibleEyes = ["Blue","Green","Brown"];
    const possibleShirts = ["Hoodie","Jacket","Coat","T-shirt","Suit"];
    const possibleBling = ["Gold Chain","Gold Watch","Gold Rings", "Gold Soul", "Gold Heart"]; 

    //get one random element from each array
    const rand1 = getRandomElement(possibleNames);
    const rand2 = getRandomElement(possibleEyes);
    const rand3 = getRandomElement(possibleShirts);
    const rand4 = getRandomElement(possibleBling);

    //assign the random elements to those variables
    let names = rand1;
    let eyeColor = rand2;
    let shirtType = rand3;
    let bling = rand4;


   //

mintNFT(names, eyeColor, shirtType, bling);
listNFTs();
getTotalSupply();
