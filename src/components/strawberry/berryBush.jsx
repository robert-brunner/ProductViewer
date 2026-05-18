import { useRef, useState } from 'react'
import './strawberryPage.css'
import FakeHeader from './berryHeader'




const productImages = [
  'https://ext.same-assets.com/2615582048/679051354.jpeg',
  'https://ext.same-assets.com/2615582048/981848003.png',
  'https://ext.same-assets.com/2615582048/1968692642.png',
]

const logoUrl = 'https://ext.same-assets.com/2615582048/2640707141.png'

const relatedProducts = [
  {
    id: 1,
    name: 'SFT900C Long-Range Remote Control Transmitter, Handheld, 900 MHz',
    image: 'https://ext.same-assets.com/2615582048/873779493.jpeg',
    price: '$189.95 – $209.95',
  },
  {
    id: 2,
    name: 'SF900C-RX-OPT14 Remote Control Receiver, Long Range, 900MHz, Outdoor Enclosure',
    image: 'https://ext.same-assets.com/2615582048/746091364.jpeg',
    price: '$297.95 – $369.95',
  },
]

const moreProducts = [
  {
    id: 3,
    name: 'SF900C-OPT14 "Switch Follower" Remote Control Transceiver, NEMA 4X Enclosure',
    image: 'https://ext.same-assets.com/2615582048/3798221197.jpeg',
    price: '$274.95 – $324.95',
  },
  {
    id: 4,
    name: 'RCR24SSA-6R-OPT14 High EMI Receiver, 6-Relay, NEMA Enclosure',
    image: 'https://ext.same-assets.com/2615582048/437843908.png',
    price: '$231.95',
    single: true,
  },
]

export default function StrawberryPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = () => setLightboxOpen(true)
  const closeLightbox = () => setLightboxOpen(false)

  const nextImage = (e) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length)
  }


  const imageRef = useRef(null)

const handleZoom = (e) => {
  const { left, top, width, height } =
    e.currentTarget.getBoundingClientRect()

  const x = ((e.clientX - left) / width) * 100
  const y = ((e.clientY - top) / height) * 100

  imageRef.current.style.transformOrigin = `${x}% ${y}%`
  imageRef.current.style.transform = "scale(2.2)"
}

const resetZoom = () => {
  imageRef.current.style.transform = "scale(1)"
  imageRef.current.style.transformOrigin = "center center"
}


  return (
    <div>
      <FakeHeader/>
      {/* Top Bar */}

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/shop">Shop</a>
        <span>/</span>
        <a href="/remote-control">Remote Control</a>
        <span>/</span>
        <span className="breadcrumb-current">SF900C-RX Remote Control Receiver, Long Range</span>
      </nav>

      {/* Main */}
      <main className="main-container">
        <div className="product-section">
          {/* Images */}
          <div className="product-images">
            <div className="main-image" onMouseMove={handleZoom} onMouseLeave={resetZoom}>
              <img ref={imageRef} src={productImages[selectedImage]} alt="SF900C-RX Product" />
            </div>
            <div className="thumbnail-row">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`View ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="product-details">
            <h1>SF900C-RX Remote Control Receiver, Long Range</h1>
            <p className="price">$227.95 – $279.95</p>

            <div className="detail-block">
              <strong>Model:</strong>
              <p>SF900C-RX</p>
            </div>

            <div className="detail-block">
              <strong>Description:</strong>
              <p>The SF900C-RX receivers, when used with SFT900C handheld transmitters, are designed to provide a quick and cost effective solution for a variety of wireless switching applications with range of up to 2+ miles.</p>
            </div>

            <div className="detail-block">
              <p>The SF900C-RX receiver operates as a multi-channel, up to 10 wireless relays using a SFT900C handheld or wall mount remote control. The default channel mode is Momentary but with optional custom software, Latched and Toggle modes are available.</p>
            </div>

            <div className="detail-block">
              <p>These products utilize frequency hopping spread spectrum technology and are resistant to interference and multi-path fading. They will not cause interference with wi-fi networks.</p>
            </div>

            <div className="detail-block">
              <strong>Includes:</strong>
              <p>SF900-RX Receiver & Antenna</p>
            </div>

            <div className="model-select">
              <label>Available Models</label>
              <select defaultValue="">
                <option value="">Choose an option</option>
                <option value="SF900C10-B-RX">SF900C10-B-RX</option>
                <option value="SF900C4-B-RX">SF900C4-B-RX</option>
                <option value="SF900C8-B-RX">SF900C8-B-RX</option>
              </select>
            </div>

            <div className="quantity-cart">
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-to-cart">Add to cart</button>
            </div>

            <div className="sku-info">
              <p><strong>SKU:</strong> N/A</p>
              <p><strong>Category:</strong> <a href="/remote-control">Remote Control</a></p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-section">
          <div className="tab-headers">
            <button
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Additional information
            </button>
            <button
              className={`tab-btn ${activeTab === 'datasheet' ? 'active' : ''}`}
              onClick={() => setActiveTab('datasheet')}
            >
              Data Sheet
            </button>
            <button
              className={`tab-btn ${activeTab === 'userguide' ? 'active' : ''}`}
              onClick={() => setActiveTab('userguide')}
            >
              User Guide [PDF]
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <>
                <h2>Description</h2>
                <h3>Features</h3>
                <ul>
                  <li>Works with SFT900 Series Handheld and Wall Mount Transmitters</li>
                  <li>Up to 10 each-10A Relay Outputs</li>
                  <li>Long Range: 1/2 to 2+ Miles</li>
                  <li>Sends "Acknowledgment" Back to Transmitter</li>
                  <li>Spread Spectrum Technology</li>
                  <li>12-28 Volt DC or AC Operation</li>
                  <li>Optional 120/240 VAC Input Power</li>
                  <li>FCC Certified</li>
                  <li>Made in USA</li>
                </ul>
                <h3>Typical Application</h3>
                <ul>
                  <li>Pump Control</li>
                  <li>Motor Control</li>
                  <li>Solenoid Control</li>
                  <li>Lighting Control</li>
                  <li>Access Control</li>
                  <li>PLC Activation</li>
                  <li>Conveyor Control</li>
                </ul>
              </>
            )}
            {activeTab === 'datasheet' && (
              <>
                <h2>Data Sheet</h2>
                <a href="#">SF900C-RX RECEIVER Spec 3-2024</a>
              </>
            )}
            {activeTab === 'userguide' && (
              <>
                <h2>User Guide [PDF]</h2>
                <a href="#">UG SF900C-B-RX 2-6-2026</a>
              </>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section className="related-section">
          <h2>You may also like...</h2>
          <div className="products-grid">
            {relatedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button>Select options</button>
              </div>
            ))}
          </div>
        </section>

        <section className="related-section">
          <h2>Related products</h2>
          <div className="products-grid">
            {moreProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button>{product.single ? 'Add to cart' : 'Select options'}</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Applied Wireless</p>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>‹</button>
          <img src={productImages[selectedImage]} alt="Zoomed product" />
          <button className="lightbox-nav lightbox-next" onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  )
}
