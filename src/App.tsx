import image from "./assets/home-coder.svg"

function App() {
  return (
    <div className="min-h-screen max-w-screen flex justify-center bg-slate-900">
      <div className="mt-20 mb-5 px-4 flex flex-col items-center sm:mt-40" >
        <div className="flex flex-col items-center gap-6 mb-10">
          <h1 className="text-5xl text-slate-300 text-center font-mono font-medium" >Testing Tailwind CSS for the first time!!!</h1>
          <p className="text-slate-500 font-mono" >Testing Tailwind for the first time. I saw many videos about this technology so I decided to give it a try!</p>
          <button className="py-2 px-4 font-mono rounded-sm bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100 transition-colors" >About It</button>
        </div>

        <img src={image} alt="SVG ilustrado programador em Tailwind CSS" />
      </div>
    </div>
  )
}

export default App
