export function NavBar() {
  return (
    <nav className="hidden sm:flex fixed w-screen justify-between items-center py-6 px-40 bg-slate-900 border-b-2 border-slate-700">
      <h2 className="text-slate-400 text-xl tracking-widest cursor-pointer" ><a href="/">LOGO</a></h2>

      <ul className="flex gap-3" >
        <li className="text-slate-500  hover:text-slate-400 transition-colors" ><a href="/">Home</a></li>
        <li className="text-slate-500  hover:text-slate-400 transition-colors" ><a href="/">About</a></li>
        <li className="text-slate-500  hover:text-slate-400 transition-colors" ><a href="/">Docs</a></li>
        <li className="text-slate-500  hover:text-slate-400 transition-colors" ><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}