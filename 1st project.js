// created a variable to hold your NFTs
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, description) {
    const nft = {
        name: name,
        artist: artist,
        description: description
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`Name: ${nfts[i].name}, Artist: ${nfts[i].artist}, Description: ${nfts[i].description}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
mintNFT("monkey", "Artist A", "worst");
mintNFT("chimpanzee", "Artist B", "best");
mintNFT("gorilla", "Artist C", "moderate");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
