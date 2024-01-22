export default function TodoList() {
  return (
    <div className="border-2 h-3/4 w-100 p-8 rounded-md">
      <div className="flex justify-between">
        <button className="btn btn-square btn-outline ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <button className="btn btn-ghost">Edit</button>
      </div>

      <div>

        <p className="text-3xl text-slate-400 text-left">Title:</p>
        <p className="text-4xl text-left">taitoruwokakimasu</p>




        <div className="border-inherit border-2 border-sky-500 text-left "></div>
        <p className="text-3xl text-slate-400 text-left">DeadLine:</p>
        <p className="text-4xl text-left">kigennwokakimasu</p>
        <div className="border-inherit border-2 border-sky-500 text-left"></div>
        <p className="text-3xl text-slate-400 text-left">List:</p>
        <p className="text-4xl text-left">bunnyawokakimasu</p>
        <div className="border-inherit border-2 border-sky-500 text-left"></div>
        <p className="text-3xl text-slate-400 text-left">Menber:</p>
        <p className="text-4xl text-left">dareganyuuryokusitakawokakimasu</p>
        <div className="border-inherit border-2 border-sky-500 text-left"></div>
        <p className="text-3xl text-slate-400 text-left">Anything:</p>
        <p className="text-4xl text-left">nannkakakimasu</p>


      </div>


    </div>






  );
}
