// scripts/deploy.js
async function main() {
    // We get the contract to deploy
    const ExampleToken = await ethers.getContractFactory("Example");
    const example = await ExampleToken.deploy();
    await example.deployed();
    console.log("example deployed to:", example.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });