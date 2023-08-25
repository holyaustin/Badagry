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
  const image = "/slave/inspection2.webp"
  const image2 = "/slave/2.jpg"
  const image3 = "/slave/8.jpg"
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
    router.push("/page6");
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
        <h1>Abolitionism in Britain</h1>
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

    <div  className="rounded-xl overflow-hidden">
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
   
    <div  className="bg-white shadow rounded-xl overflow-hidden">
      <div className="p-4">
        <p style={{ height: "20px" }} className="text-3xl font-semibold underline">Page Five Information</p>
      </div>
      <br/>
      <p> 
      Abolitionism was one of Britain’s first lobbying movements. The first meeting of the Society for Effecting the Abolition of the Slave Trade took place in London in May 1787. African writers and activists such as Olaudah Equiano spoke out against the trade and its inhumane treatment of Africans. High-profile figures such as William Wilberforce MP, and Thomas Clarkson also used their influence to effect its abolition. </p>
      <br/> <p>
Abolitionists argued that, in addition to stopping an immoral practice, ending the slave trade would save the lives of thousands of European sailors and open new markets for British goods. But their pro-slavery opponents pointed out how important Caribbean plantations were to Britain’s economy.</p>
<br/><p>
Parliament finally passed an Act to abolish the slave trade in 1807. It stated that all slave trading by British subjects was ‘utterly abolished, prohibited and declared to be unlawful’. But it did not end the institution of slavery itself and nearly 750,000 people remained enslaved in British colonies across the Caribbean.</p>

  </div> </div>
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
