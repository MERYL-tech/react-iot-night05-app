export default function NavBar() {
  return (
    <>
        <div className="flex justify-center gap-5 bg-blue-800 py-3">
            <a href="/" className="text-white">HOME</a>
            <a href="/about" className="text-white">ABOUT</a>
            <a href="/contact" className="text-white">CONTACT</a>
            <a href="/product" className="text-white">PRODUCT</a>
        </div>        
    </>
  )
}