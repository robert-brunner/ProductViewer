export default function SF900CPage() {
  const relatedProducts = [
    {
      title: 'SF900C Long-Range Remote Control Transmitter',
      price: '$189.95 – $209.95',
      image:
        'https://appliedwireless.com/wp-content/uploads/2020/07/SF900C-RX-Remote-Control-Receiver-Long-Range-900Mhz.jpg',
    },
    {
      title: 'SF900C-RX-OPT14 Receiver Outdoor Enclosure',
      price: '$297.95 – $369.95',
      image:
        'https://appliedwireless.com/wp-content/uploads/2020/07/SF900C-RX-OPT14.jpg',
    },
    {
      title: 'SF900C-OPT14 Switch Follower Receiver',
      price: '$274.95 – $324.95',
      image:
        'https://appliedwireless.com/wp-content/uploads/2020/07/SF900C-RX-OPT14.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#111827]">
      <nav className="border-b border-black/10 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <div className="text-[22px] font-semibold tracking-[0.2em] uppercase">
            Applied Wireless
          </div>

          <div className="hidden gap-10 text-[13px] uppercase tracking-[0.18em] md:flex">
            <a href="#">Products</a>
            <a href="#">Industrial</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-20 px-8 py-20 lg:grid-cols-2">
        <div className="relative flex items-center justify-center overflow-hidden rounded-[40px] border border-black/10 bg-[#1b1b1b] shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />

          <div className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

          <div className="flex h-[720px] w-full items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <img
                src="https://appliedwireless.com/wp-content/uploads/2020/07/SF900C-RX-Remote-Control-Receiver-Long-Range.jpg"
                alt="SF900C"
                className="w-[520px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-[1.02]"
              />

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[12px] uppercase tracking-[0.22em] text-white/60">
                Three.js Viewer Placeholder
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-5 text-[12px] uppercase tracking-[0.25em] text-black/40">
            Long Range RF Receiver
          </div>

          <h1 className="max-w-[700px] text-[58px] font-semibold leading-[1.05] tracking-[-0.04em]">
            SF900C-RX Remote Control Receiver
          </h1>

          <div className="mt-6 text-[34px] font-light tracking-[-0.03em] text-black/80">
            $227.95 – $279.95
          </div>

          <p className="mt-10 max-w-[650px] text-[17px] leading-[1.9] text-black/70">
            Industrial long-range RF receiver designed for wireless switching,
            relay activation, and multi-channel remote control applications.
            Modernized premium product presentation concept using React,
            Tailwind, and a future React Three Fiber product viewer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-black px-10 py-4 text-[13px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black/90">
              Request Quote
            </button>

            <button className="rounded-full border border-black/15 bg-white px-10 py-4 text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black hover:text-white">
              Download Datasheet
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-5">
            <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-[12px] uppercase tracking-[0.18em] text-black/40">
                Range
              </div>

              <div className="mt-3 text-[28px] font-semibold tracking-[-0.03em]">
                2+ Miles
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-[12px] uppercase tracking-[0.18em] text-black/40">
                Outputs
              </div>

              <div className="mt-3 text-[28px] font-semibold tracking-[-0.03em]">
                10 Relay
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 pb-20">
        <div className="flex gap-4 overflow-auto border-b border-black/10 pb-4">
          <button className="rounded-full bg-black px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-white">
            Description
          </button>

          <button className="rounded-full border border-black/10 bg-white px-6 py-3 text-[12px] uppercase tracking-[0.18em]">
            Specifications
          </button>

          <button className="rounded-full border border-black/10 bg-white px-6 py-3 text-[12px] uppercase tracking-[0.18em]">
            Downloads
          </button>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-[42px] font-semibold tracking-[-0.04em]">
              Industrial Wireless Control
            </h2>

            <p className="mt-8 text-[17px] leading-[2] text-black/70">
              Designed for harsh industrial environments with support for long
              range switching, relay control, PLC activation, lighting control,
              access systems, and conveyor operation.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              'Long Range RF',
              'Frequency Hopping',
              'Industrial Grade',
              'Outdoor Compatible',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="text-[18px] font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 pb-28">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-[12px] uppercase tracking-[0.25em] text-black/40">
              Product Line
            </div>

            <h2 className="mt-3 text-[44px] font-semibold tracking-[-0.04em]">
              Related Products
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-[340px] items-center justify-center overflow-hidden bg-[#ececec] p-10">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-[260px] transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-8">
                <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                  {product.title}
                </h3>

                <div className="mt-4 text-[18px] text-black/60">
                  {product.price}
                </div>

                <button className="mt-8 w-full rounded-full bg-black px-6 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-black/90">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-8 py-10 text-center text-[12px] uppercase tracking-[0.18em] text-black/40 md:flex-row">
          <div>Applied Wireless Concept Mockup</div>

          <div>React + Tailwind + Three.js Ready</div>
        </div>
      </footer>
    </div>
  );
}
