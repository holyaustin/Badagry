import React, { useEffect, useState } from "react";
import { jsx, Box } from 'theme-ui';
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from 'next/router'

import fileNFT from "../artifacts/contracts/Badagry.sol/BadagryNFT.json";
import { badagryNFTAddress } from "../config";

export default function ViewFile() {
  console.log('Entered viewing component');
  const router = useRouter();
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const image = "/slave/slaveinship.jpg"
  const image2 = "/slave/5.jpg"
  const image3 = "/slave/1.jpg"
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    loadBounties();
  }, []);
  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    return ipfsGateWayURL;
  };

  const getId = (props) => {
    console.log(props);
    return props;
  };
  async function Mint1() {
    router.push("");
  }
  async function Mint2() {
    router.push("");
  }

  async function Next() {
    router.push("/page5");
  }
  const rpcUrl = "https://goerli.base.org";

   const { query: id } = router; 
   const props =  id ;
   console.log('Props result is without ', props.id);


  async function loadBounties() {
    /* create a generic provider and query for unsold market items 
    console.log("loading bounty for item", props.id);
    const carid = props.id;
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(fileShareAddress, fileNFT.abi, provider);
    // const data = await contract.fetchOneNFT(carid);
    console.log("book data fetched from contract");
    // console.log(provider.getCode(address));

    const items = await Promise.all(data.map(async (i) => {
      const tokenUri = await contract.tokenURI(i.tokenId);
      console.log("token Uri is ", tokenUri);
      const httpUri = getIPFSGatewayURL(tokenUri);
      console.log("Http Uri is ", httpUri);
      const meta = await axios.get(httpUri);

      
      const item = {
        tokenId: i.tokenId.toNumber(),
        image: getIPFSGatewayURL(meta.data.image),
        name: meta.data.name,
        description: meta.data.description,
        vin: meta.data.properties.vin,
        address: meta.data.properties.address,
        make: meta.data.properties.make,
        model: meta.data.properties.model,
        price: meta.data.properties.price,
        year: meta.data.properties.year,
        colour: meta.data.properties.colour,
        image2: getIPFSGatewayURL(meta.data.properties.image2),
        image3: getIPFSGatewayURL(meta.data.properties.image3),

      };
      console.log("item returned is ", item);
      return item;
    }));
    setNfts(items);
    setLoadingState("loaded");
    */
  }


  if (loadingState === "loaded" && !nfts.length) {
    return (
      <div>
        <Navbar />
        <h1 className="px-20 py-10 text-3xl">You have not selected anybook to read</h1>
        <Footer />
      </div>
    );
  }
  return (
    <Box as="section"  sx={styles.section} className="bg-blue-100 ">
    <>
    <div className=" text-4xl text-center text-white font-bold ">
        <h1>How did the slave trade develop in Britain?</h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 col-gap-2 row-gap-5 bg-gray-300 mx-20 my-5">

	<div className="col-start-1 col-end-3 row-span-2 text-white bg-indigo-500 text-4xl flex items-center justify-center border-4 border-red-500">

  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4">

    <div className="shadow rounded-xl overflow-hidden">
      <img
        title="Car Pics"
        frameBorder="0"
        scrolling="no"
        height="450px"
        width="100%"
        src={`${image}#toolbar=0`}
        className="object-fill h-400 w-full"
      />
      <div className="p-4">
        <p style={{ height: "20px" }} className="text-3xl font-semibold"></p>
      </div>
      <div className="p-4">
        <p style={{ height: "20px" }} className="text-3xl font-semibold"></p>
      </div>
    
      <div className="p-4">
        <p style={{ height: "50px" }} className="text-2xl font-semibold"></p>
      </div>

    </div>

</div>
    
  </div>
	<div className="text-white bg-indigo-500 text-4xl flex items-center justify-center border-4 border-red-500">
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4">

    <div className="rounded-xl overflow-hidden">
      <img
        title="Car Pics"
        frameBorder="0"
        scrolling="no"
        height="450px"
        width="100%"
        src={`${image2}#toolbar=0`}
        className="object-fill h-400 w-full"
      />


    </div>

</div>
    
    
  </div>
	<div className="row-span-3 text-black bg-white text-2xl flex text-left p-3 ">
    
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <div className="p-4">
        <p style={{ height: "20px" }} className="text-3xl font-semibold underline">Page Four Information</p>
      </div>
      <br/>
      <p>
      Elizabeth I believed that capturing Africans against their will 'would be detestable and call down the vengeance of Heaven upon the undertakers', yet after seeing the huge profits available she lent Royal Ships to two slaving expeditions of John Hawkins – the first English trader of enslaved people from West Africa to the Americas.</p>
      <br/>
      <p>
          No English settlements were established in North America or in the West Indies during the reign of Elizabeth, but in the 17th century the English began to acquire territory in the New World. The English colonies expanded rapidly and the development of a plantation system and the growth of the Atlantic economy brought further demands for African labour. This increased the scale of the trade in enslaved people.</p>
          <br/><p>
          In the first third of the 18th century, Britain’s involvement in the slave trade grew enormously. In the 1710s and 1720s, nearly 200,000 enslaved Africans were transported across the Atlantic in British ships.</p>
          </div> 
  </div> 
	<div className="text-white bg-indigo-500  text-4xl flex items-center justify-center border-4 border-red-500">
    
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4">

    <div className="shadow rounded-xl overflow-hidden">
      <img
        title="Car Pics"
        frameBorder="0"
        scrolling="no"
        height="450px"
        width="100%"
        src={`${image3}#toolbar=0`}
        className="object-fill h-400 w-full"
      />

    </div>

</div>

</div>
		<div className="col-span-3 text-white bg-indigo-500  text-4xl flex items-center justify-center">
    
    <div className="p-4 bg-indigo-500 ">
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full">
                    <a
                      className="social-icon-link github"
                      href="https://web3chat-holyaustin.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="chat"
                    >Chat
                    </a>
                  </button>
                </div>
                <div className="p-4 bg-indigo-500">
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full" onClick={() => Claim()}> Mint NFT 1</button>
                </div>
                <div className="p-4 bg-indigo-500">
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full" onClick={() => Live()}>Mint NFT 2</button>
                </div>
                <div className="p-4 bg-indigo-500">
                  <button type="button" className="w-full bg-blue-800 text-white font-bold py-2 px-12 border-b-4 border-blue-200 hover:border-blue-500 rounded-full" onClick={() => Next()}>Next page</button>
                </div>
            
    </div>

   
</div>
    </>
      </Box>
  );
}

const styles = {
  section: {
    backgroundColor: '#101233',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
 };
