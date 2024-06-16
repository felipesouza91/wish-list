import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex md:w-4/5 min-h-screen flex-col items-center md:flex-row md:items-start justify-between p-4 mx-auto md:p-24">
      <div className="lg:mr-10 mb-10">
        <Image src="https://github.com/felipesouza91.png" width={300} height={300} alt="Image" className="rounded-full"/>
      </div>
      <div className="w-full flex justify-between items-center flex-wrap gap-8 md:gap-3 ">
        <div className="flex md:w-[200px] gap-3 flex-col border rounded-lg bg-gray-100 ">
          <Image src="https://down-br.img.susercontent.com/file/sg-11134201-7rbm7-ln3ij4arylcbe8_tn" alt="" width={200} height={200} className="w-full" />
          <div className="w-full flex p-3 sm:flex-row items-center gap-4">
            <h2 className="text-md font-bold text-start" >Pistola de massagem elétrica, massageador de tecidos profundos</h2>
          </div>
            <Link href={`/item/${10}`} className="w-full p-3 rounded-b-lg text-center md:text-md bg-gray-700 text-white">Enviar</Link>
        </div>        
     
      </div>
     
    </main>
  );
}
