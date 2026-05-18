import '../strawberry/berryHeader.css'
import berryBanner from '../strawberry/berryImg/berryTop.webp'

const FakeHeader = () => {

return (

    <header className="berry-header">

      <div className="berry-top">
        

        <div className="berry-logo">
          <img src="https://ext.same-assets.com/2615582048/2640707141.png" alt="Applied Wireless" />
        </div>


        <div className="berry-search">

          <input
            type="text"
            placeholder="Search here..."
          />

          <button>
            🔍
          </button>

        </div>
        

        <div className="berry-phone">
          (805) 383-9600
        </div>

      </div>

      <nav className="berry-nav">

        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Support</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>

        <div className="berry-nav-right">
          <a href="/">My account</a>
          <a href="/">Checkout</a>
          <a href="/">Cart</a>
        </div>

      </nav>

    </header>

  )

}
export default FakeHeader;