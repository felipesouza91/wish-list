import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex md:w-4/5 min-h-screen flex-col items-center justify-between p-4 mx-auto md:p-24">
      <div className="w-full flex justify-between items-center flex-wrap gap-8 md:gap-3 ">
        <div className="flex w-full md:basis-1/5 gap-3 flex-col justify-center items-center border p-3 rounded-lg">
          <Image src="https://down-br.img.susercontent.com/file/sg-11134201-7rbm7-ln3ij4arylcbe8_tn" alt="" width={200} height={200} />
          <h2 className="w-full font-bold	text-xl text-center" >Pistola de massagem elétrica, massageador de tecidos profundos</h2>
          <div className="w-full md:w-1/2 flex justify-center flex-col sm:flex-row items-center gap-4">
            <div className="w-full flex justify-center items-center flex-col border rounded-lg px-3 py-1">
              <span className="font-bold text-lg">Quantidade</span>
              <span>2</span>
            </div>
            <Link href={`/item/${10}`} className="w-full p-3 rounded-lg  font-bold text-lg md:text-md bg-green-700">Enviar</Link>
          </div>
        </div>
       
      </div>
   
    </main>
  );
}
