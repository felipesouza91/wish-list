import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const item: React.FC = () => {
  return (
    <main className="flex flex-col flex-1 md:flex-row justify-center items-start p-4 mx-auto md:p-24 lg:w-2/3">
      <Image src="https://down-br.img.susercontent.com/file/sg-11134201-7rbm7-ln3ij4arylcbe8_tn" alt="" width={200} height={200}
          className="w-full lg:w-1/3 md:mr-10" />
      <div className="flex gap-3 items-center justify-between flex-col mt-5 md:mt-0">
        <h2 className="text-2xl font-bold text-start " >Pistola de massagem elétrica, massageador de tecidos profundos</h2>
        <div className='flex flex-col items-center mt-5'>
          <span className='font-bold text-lg'>Instruções de envio</span>
          <span>Pode nos entregar em mãos ou enviar para o endereço:</span>
          <span>Rua 123, 20 </span>
          <span>Santo Cristo, Rio de janeiro</span>
          <span>CEP: 20220-700</span>
        </div>
        <Link href={`/item/${10}`} className="w-full mt-3 p-3 text-center md:text-md bg-gray-700 text-white">Acessar loja</Link>
      </div>        
    </main>
  )
}

export default item;