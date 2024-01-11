import { useState } from "react";
import { start_process } from "./wallet";



function App() {
  // start_process();
  let [sender, set_sender]= useState('');
  let [receiver, set_receiver]= useState('');
  let [g_price, set_g_price]= useState('');
  const [passwordHash, set_passwordHash]= useState(null);

  const submit_all = async() => {
    if (sender.trim().length === 0){
      sender= '0x6A20cfB4A2e921d23490f5ed49C691F54c26e700';
    }
    if (receiver.trim().length === 0){
      receiver= '0x0f10c1AD4758BdC07661e09648eDb0B1ec83A038';
    }
    if (g_price.trim().length === 0){
      g_price= '234567897654321';
    }

    const result_gotten= await start_process(sender, receiver, g_price);
    set_passwordHash(result_gotten);
  }


  return (
    <div className="scale-75  h-screen max-h-screen relative mx-auto justify-center items-center flex">
        <div className=" flex flex-col sm:scale-50 md:scale-90 md:w-[600px] bg-[#3f3f7e] shadow-md shadow-black/50 rounded-3xl mx-auto   space-y-4 justify-center  px-8 py-12  items-center">
        <div className="pb-8 mx-auto flex justify-center"></div>

          <h1 className="py-12 my-4 px-5 shadow-lg text-center pb-12 text-3xl font-bold text-white">React ERC20 Wallet Sample Project</h1>

          <div className="flex flex-row w-[550px] space-x-2 justify-center">
            <h1 className="py-4 text-[20px] text-white bg-blue-500/30 text-center w-[14rem] shadow-black shadow-sm rounded-full">Sender Address:</h1>
            <input onChange={e => set_sender(e.target.value)} className="bg-white/20 text-white flex py-4 px-6 w-[25rem] rounded-full shadow-sm shadow-black" placeholder={"0x6A20cfB4A2e921d23490f5ed49C691F54c26e700"} />
          </div>

          <div className=" flex flex-row w-[550px] space-x-2 justify-center">
            <h1 className="py-4 text-[20px] text-white bg-blue-500/30 text-center w-[14rem] shadow-black shadow-sm rounded-full">Receiver Address:</h1>
            <input onChange={e => set_receiver(e.target.value)} className="bg-white/20 text-white  flex py-4 px-6 w-[25rem] rounded-full shadow-sm shadow-black" placeholder={"0x0f10c1AD4758BdC07661e09648eDb0B1ec83A038"} />
          </div>

          <div className=" flex flex-row w-[550px] space-x-2 justify-center">
            <h1 className="py-4 text-[20px] text-white bg-blue-500/30 text-center w-[14rem] shadow-black shadow-sm rounded-full">Gas Price:</h1>
            <input onChange={e => set_g_price(e.target.value)} className="bg-white/20 text-white  flex py-4 px-6 w-[25rem] rounded-full shadow-sm shadow-black" placeholder={"234567897654321"} />
          </div>



          <div className="py-4 flex flex-row md:w-[550px] justify-center ">
            <button onClick={submit_all} className="mt-6 text-center mx-auto justify-center text-white border bg-blue-500 font-bold text-[18px] flex py-4 px-2 w-[16rem] rounded-2xl shadow-sm shadow-black">Make Payment</button>
          </div>

          {passwordHash 
            ? <a href={passwordHash} className=" flex rounded-2xl w-[550px]  shadow-lg shadow-gray-700/70 justify-center bg-white/75">
                
                  <div className="flex flex-col w-[550px] overflow-hidden space-y-0 py-2 mx-4">
                      <h1 className="flex text-center mx-auto font-bold">Click here to go to the link: </h1> 
                      <p href="" className="break-words text-ellipsis justify-center flex text-center text-black w-[350px] my-4">{passwordHash}</p>
                    </div>
              </a> 
            : <br/>
          }
          <div className="pb-8 pt-6"></div>
        
      </div>
    </div>

  );
}

export default App;
