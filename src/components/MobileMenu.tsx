import { useState } from "react"

export function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div className="w-10 h-10 cursor-pointer fixed top-7 right-7 bg-slate-800 flex flex-col items-center justify-center gap-1 rounded-sm z-50 sm:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className={`w-3/4 h-1 bg-slate-300 ${openMenu && 'rotate-45 -translate-y-1'} transition-all`} />
        <div className={`w-3/4 h-1 bg-slate-300 ${openMenu && '-translate-x-5 -translate-y-[2px] w-14'} transition-all`} />
        <div className={`w-3/4 h-1 bg-slate-300 ${openMenu && '-rotate-45'} transition-all`} />
      </div>

      <div className={`fixed left-0 top-0 w-screen h-screen bg-slate-800 ${openMenu ? '-ml-0' : '-ml-[100vw]'} transition-all sm:hidden`}>
        <div className="w-full h-full flex items-center justify-center" >
          <ul className="flex flex-col gap-3" >
            <li className="text-slate-400" ><a href="/">Home</a></li>
            <li className="text-slate-400" ><a href="/">About</a></li>
            <li className="text-slate-400" ><a href="/">Docs</a></li>
            <li className="text-slate-400" ><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}