import { Phone, MapPin, Truck, Wrench, Clock, ShieldCheck, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

export default function App() {
  const phoneNumber = "775-555-0199";
  const phoneLink = "tel:+17755550199";

  return (
    <div className="min-h-screen font-body selection:bg-outlaw-accent selection:text-white flex flex-col bg-[#050505]">

      {/* Site-wide Cinematic Noise Texture (Tactile Film Grain) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] mix-blend-screen">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-100">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Top Bar (Very top, small) */}
      <div className="bg-black text-gray-400 py-2.5 text-xs tracking-wider uppercase border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 font-medium tracking-widest"><Clock className="w-3.5 h-3.5 text-outlaw-accent" /> 24/7 Emergency Dispatch</span>
            <span className="flex items-center gap-2 opacity-80"><MapPin className="w-3.5 h-3.5 text-outlaw-accent" /> Serving Reno, Sparks & Donner Pass</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="opacity-80">Licensed & Bonded</span>
            <span className="text-outlaw-accent font-bold tracking-widest">ETA: ~30-45 Mins</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-black/60 backdrop-blur-2xl sticky top-0 z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-28 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shrink-0">
              <img src="/reno nv tow company.png" alt="American Outlaw Logo" className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_15px_rgba(245,179,1,0.15)]" />
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={phoneLink}
            className="group relative bg-transparent text-white px-6 py-3 md:px-8 md:py-3.5 rounded-none flex items-center gap-4 font-heading text-lg md:text-xl uppercase tracking-widest transition-all overflow-hidden border border-white/20 hover:border-outlaw-accent"
          >
            {/* Button Hover Fill */}
            <div className="absolute inset-0 bg-outlaw-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

            <div className="relative z-10 flex items-center gap-3">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-outlaw-accent group-hover:text-black transition-colors duration-500" fill="currentColor" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] text-gray-400 group-hover:text-black/70 font-body font-bold mb-1 tracking-widest hidden md:block">DISPATCH 24/7</span>
                <span className="group-hover:text-black transition-colors duration-500 hidden sm:block">{phoneNumber}</span>
                <span className="group-hover:text-black transition-colors duration-500 sm:hidden">CALL NOW</span>
              </div>
            </div>
          </a>
        </div>
      </header>

      {/* Hero Section (Split Layout) */}
      <section className="relative bg-[#050505] pt-16 pb-48 lg:pt-32 lg:pb-64 overflow-hidden">
        {/* Subtle background texture & Premium Glows */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent z-0"></div>
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-outlaw-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="max-w-2xl relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-outlaw-accent/30 bg-outlaw-accent/5">
                  <span className="absolute w-full h-full rounded-full border border-outlaw-accent opacity-20 animate-ping"></span>
                  <span className="w-1.5 h-1.5 bg-outlaw-accent rounded-full animate-pulse blur-[0.5px]"></span>
                  <span className="w-1.5 h-1.5 bg-outlaw-accent rounded-full absolute"></span>
                </div>
                <h4 className="text-gray-300 font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase">
                  American Outlaw <span className="text-outlaw-accent/50 mx-2">/</span> 24-7 Dispatch
                </h4>
                <div className="hidden sm:block flex-1 max-w-[80px] h-[1px] bg-gradient-to-r from-outlaw-accent/60 to-transparent ml-2"></div>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading text-white mb-8 leading-[0.9] tracking-tight uppercase">
                Let's get the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-outlaw-accent to-yellow-300 filter drop-shadow-[0_0_20px_rgba(245,179,1,0.3)]">towing truck</span> moving.
              </h1>
              <p className="text-xl text-gray-400 mb-10 font-normal leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
                Stranded on I-80 or overheating in the desert? We provide rapid, professional recovery and 24/7 roadside assistance across Northern Nevada.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#book" className="group relative bg-outlaw-accent text-black px-8 py-5 flex items-center gap-3 font-heading text-xl uppercase tracking-widest transition-all hover:bg-yellow-400 shadow-[0_0_30px_rgba(245,179,1,0.2)]">
                  Request a Tow
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5 px-8 py-5 flex items-center font-heading text-xl uppercase tracking-widest transition-all">
                  Our Services
                </a>
              </div>
            </div>

            {/* Right Image (Truck) */}
            <div className="hidden lg:block relative">
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-outlaw-accent/10 rounded-full blur-[100px] z-0 mix-blend-screen"></div>
              <img
                src="/hero-tow.png"
                alt="American Outlaw Tow Truck"
                className="relative z-10 rounded-lg shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Conversion Bar (Overlaps Hero and Next Section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32 lg:-mt-40 mb-16" id="book">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden flex-col lg:flex-row">

          {/* Booking Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 border-t-4 border-outlaw-bg">
            <h3 className="text-2xl font-heading text-gray-900 mb-6 flex items-center gap-2">
              <Truck className="w-6 h-6 text-outlaw-accent" /> Request Dispatch Online
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-outlaw-accent focus:border-outlaw-accent outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-outlaw-accent focus:border-outlaw-accent outline-none" placeholder="(775) 555-0000" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Vehicle Location</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-outlaw-accent focus:border-outlaw-accent outline-none" placeholder="e.g., I-80 Eastbound MM 12" />
              </div>
              <div className="flex items-end">
                <button type="button" className="w-full bg-outlaw-bg hover:bg-gray-900 text-white font-heading text-lg uppercase tracking-wider py-3 px-4 rounded transition-colors flex justify-center items-center gap-2">
                  Send Request <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Call Us Block */}
          <div className="bg-outlaw-accent p-8 md:p-10 flex flex-col justify-center items-center text-center text-gray-900 border-t-4 border-outlaw-accent-hover">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Phone className="w-8 h-8 text-outlaw-accent" />
            </div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-2 opacity-90">24/7 Emergency Towing</h4>
            <a href={phoneLink} className="text-4xl md:text-5xl font-heading font-bold hover:scale-105 transition-transform hover:text-outlaw-accent-hover">
              {phoneNumber}
            </a>
            <p className="mt-4 text-sm font-medium opacity-90">Call now for immediate dispatch.</p>
          </div>

        </div>
      </div>

      {/* About Section (Editorial Spread) */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Editorial Typography */}
        <div className="absolute top-10 left-[-5%] text-[15rem] font-heading font-black text-white/[0.02] tracking-tighter leading-none pointer-events-none uppercase whitespace-nowrap z-0">
          RECOVERY
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Image Stack */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-outlaw-accent/20 translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
                <img
                  src="/about-tow.png"
                  alt="American Outlaw Recovery Truck"
                  className="rounded-xl shadow-2xl w-full object-cover h-[500px] grayscale contrast-125 hover:grayscale-0 transition-all duration-700 border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Dark Mode Stat Badge */}
              <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 bg-gray-900/90 backdrop-blur-md p-6 shadow-2xl rounded-xl border border-white/10 max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Avg ETA</p>
                </div>
                <h4 className="font-heading text-4xl text-white leading-none tracking-tight mb-1">
                  ~35<span className="text-outlaw-accent text-2xl">MIN</span>
                </h4>
                <p className="text-gray-500 text-xs mt-2">Anywhere in Greater Reno</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 lg:pl-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-outlaw-accent"></div>
                <h4 className="text-outlaw-accent font-bold tracking-widest text-xs uppercase letter-spacing-[0.2em]">The Outlaw Difference</h4>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-8 leading-[1.1] uppercase tracking-tight">
                Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-outlaw-accent to-yellow-300 filter drop-shadow-[0_0_15px_rgba(245,179,1,0.3)]">Nevada's</span> <br />
                Worst Days.
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                American Outlaw Towing isn't your average hook-and-chain operation. We specialize in the tough jobs—the ones other companies walk away from. Whether you're stuck in a snowbank on Donner Pass, or stranded in the high desert heat, we have the heavy iron and the grit to get you home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-10">
                <div>
                  <h4 className="text-white font-heading text-xl uppercase tracking-wide mb-2">Honest Pricing</h4>
                  <p className="text-sm text-gray-500">No hidden fees. You know the exact cost before we hook up your vehicle.</p>
                </div>
                <div>
                  <h4 className="text-white font-heading text-xl uppercase tracking-wide mb-2">Off-Road Ready</h4>
                  <p className="text-sm text-gray-500">Equipped for 4x4 off-road recovery and tough desert situations.</p>
                </div>
              </div>

              <a href="#services" className="inline-flex items-center gap-3 text-outlaw-accent font-heading text-lg uppercase tracking-widest hover:text-yellow-400 transition-colors group">
                Discover More
                <span className="w-8 h-8 rounded-full border border-outlaw-accent flex items-center justify-center group-hover:bg-outlaw-accent group-hover:text-black transition-all">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="services">
        {/* Decorative Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-outlaw-accent/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-outlaw-accent/60"></div>
              <h4 className="text-outlaw-accent font-bold tracking-widest uppercase text-sm">Capabilities</h4>
              <div className="w-12 h-[2px] bg-outlaw-accent/60"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 tracking-tight">EQUIPPED FOR THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-outlaw-accent to-yellow-200">EXTREME</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">No matter where you are or what you're driving, we have the specialized equipment and expertise to recover your vehicle safely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="group relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-outlaw-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(204,85,0,0.3)] flex flex-col">
              {/* Giant background icon */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:rotate-12 group-hover:scale-110">
                <Truck className="w-64 h-64 text-white" strokeWidth={1} />
              </div>

              <div className="p-8 lg:p-10 flex-grow flex flex-col relative z-10">
                <div className="w-20 h-20 rounded-3xl overflow-hidden mb-8 shadow-[0_0_20px_rgba(245,179,1,0.2)] group-hover:scale-110 transition-transform duration-500 border border-white/10 bg-black flex items-center justify-center p-1 relative group-hover:shadow-[0_0_30px_rgba(245,179,1,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none"></div>
                  <img src="/winter-ops-icon.png" alt="Winter Ops" className="w-full h-full object-cover rounded-2xl relative z-0" />
                </div>

                <h3 className="text-2xl font-heading text-white mb-4 tracking-wide uppercase group-hover:text-outlaw-accent transition-colors">The Pass & Winter Ops</h3>
                <p className="text-gray-400 leading-relaxed mb-12 flex-grow text-lg">
                  Specialized in Donner Pass recoveries, severe snow extraction, and chain-up rescues. We pull you out of the worst Sierra storms.
                </p>

                <div className="border-t border-white/10 pt-6">
                  <a href={phoneLink} className="inline-flex items-center gap-3 text-white font-heading tracking-widest uppercase hover:text-outlaw-accent transition-colors text-lg">
                    Call Dispatch <ChevronRight className="w-5 h-5 text-outlaw-accent group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-outlaw-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(204,85,0,0.3)] flex flex-col">
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:-rotate-12 group-hover:scale-110">
                <MapPin className="w-64 h-64 text-white" strokeWidth={1} />
              </div>

              <div className="p-8 lg:p-10 flex-grow flex flex-col relative z-10">
                <div className="w-20 h-20 rounded-3xl overflow-hidden mb-8 shadow-[0_0_20px_rgba(245,179,1,0.2)] group-hover:scale-110 transition-transform duration-500 border border-white/10 bg-black flex items-center justify-center p-1 relative group-hover:shadow-[0_0_30px_rgba(245,179,1,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none"></div>
                  <img src="/desert-highway-icon.png" alt="Desert Highway" className="w-full h-full object-cover rounded-2xl relative z-0" />
                </div>

                <h3 className="text-2xl font-heading text-white mb-4 tracking-wide uppercase group-hover:text-outlaw-accent transition-colors">Desert & Highway</h3>
                <p className="text-gray-400 leading-relaxed mb-12 flex-grow text-lg">
                  Blown tires on HWY 395 or overheating engines on the 580. From long-distance tows to dead batteries at casino parking garages.
                </p>

                <div className="border-t border-white/10 pt-6">
                  <a href={phoneLink} className="inline-flex items-center gap-3 text-white font-heading tracking-widest uppercase hover:text-outlaw-accent transition-colors text-lg">
                    Call Dispatch <ChevronRight className="w-5 h-5 text-outlaw-accent group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-outlaw-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(204,85,0,0.3)] flex flex-col">
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:rotate-12 group-hover:scale-110">
                <Wrench className="w-64 h-64 text-white" strokeWidth={1} />
              </div>

              <div className="p-8 lg:p-10 flex-grow flex flex-col relative z-10">
                <div className="w-20 h-20 rounded-3xl overflow-hidden mb-8 shadow-[0_0_20px_rgba(245,179,1,0.2)] group-hover:scale-110 transition-transform duration-500 border border-white/10 bg-black flex items-center justify-center p-1 relative group-hover:shadow-[0_0_30px_rgba(245,179,1,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none"></div>
                  <img src="/off-road-icon.png" alt="Off-Road" className="w-full h-full object-cover rounded-2xl relative z-0" />
                </div>

                <h3 className="text-2xl font-heading text-white mb-4 tracking-wide uppercase group-hover:text-outlaw-accent transition-colors">Off-Road & Specialty</h3>
                <p className="text-gray-400 leading-relaxed mb-12 flex-grow text-lg">
                  Stuck deep in BLM land? Our off-road teams specialize in sand, mud, and ditch recoveries. Secure motorcycle towing available.
                </p>

                <div className="border-t border-white/10 pt-6">
                  <a href={phoneLink} className="inline-flex items-center gap-3 text-white font-heading tracking-widest uppercase hover:text-outlaw-accent transition-colors text-lg">
                    Call Dispatch <ChevronRight className="w-5 h-5 text-outlaw-accent group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-r from-outlaw-accent via-yellow-400 to-outlaw-accent shadow-[0_-10px_40px_-5px_rgba(245,179,1,0.3)]">
        {/* Decorative Background Icon */}
        <div className="absolute -right-10 -bottom-24 opacity-[0.08] pointer-events-none transform -rotate-12 transition-transform duration-1000 hidden md:block">
          <Truck className="w-[30rem] h-[30rem] text-gray-900" strokeWidth={1} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6 bg-gray-900 px-5 py-2.5 shadow-xl border-l-4 border-red-500 transform -skew-x-6">
              <div className="relative flex h-3 w-3 skew-x-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              </div>
              <span className="text-white font-heading tracking-widest uppercase text-sm font-semibold skew-x-6">Emergency Dispatch Ready</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-gray-900 mb-4 tracking-tight uppercase leading-[1.1]">
              Need a tow <span className="text-white drop-shadow-md border-b-4 border-gray-900">right now?</span>
            </h2>
            <p className="text-gray-900/90 text-xl md:text-2xl font-medium mt-6">
              Don't wait. Our dispatchers are standing by 24/7/365 to get you back on the road.
            </p>
          </div>

          <div className="relative group shrink-0">
            {/* Button Glow Component */}
            <div className="absolute inset-[-4px] bg-white rounded-xl blur-lg opacity-40 group-hover:opacity-80 group-hover:blur-xl transition-all duration-500"></div>

            <a
              href={phoneLink}
              className="relative bg-gray-900 hover:bg-black text-white px-8 md:px-12 py-5 md:py-6 rounded-xl flex items-center gap-5 font-heading text-2xl md:text-3xl uppercase tracking-widest transition-all duration-300 transform group-hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-gray-800"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-[-10px] bg-outlaw-accent rounded-full animate-ping opacity-20"></div>
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-outlaw-accent" fill="currentColor" />
              </div>
              <span>{phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] relative pt-24 pb-10 border-t border-white/5 text-gray-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8">
                <div className="w-48 h-48 flex items-center shrink-0">
                  <img src="/reno nv tow company.png" alt="American Outlaw Logo" className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_15px_rgba(245,179,1,0.1)] opacity-80 hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
              <p className="max-w-sm mb-8 text-gray-400 font-light leading-relaxed">
                Professional, reliable, and no-nonsense towing and recovery services for Northern Nevada. We fight back when the road fights you.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-outlaw-accent hover:border-outlaw-accent transition-colors cursor-pointer group">
                  <span className="font-bold text-gray-500 group-hover:text-black transition-colors">f</span>
                </div>
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-outlaw-accent hover:border-outlaw-accent transition-colors cursor-pointer group">
                  <span className="font-bold text-gray-500 group-hover:text-black transition-colors">ig</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-xl text-white mb-8 tracking-widest uppercase">Contact Info</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-outlaw-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">24/7 Dispatch</span>
                    <a href={phoneLink} className="text-gray-300 hover:text-outlaw-accent transition-colors font-heading text-xl tracking-wider select-all">{phoneNumber}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-outlaw-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Location</span>
                    <span className="text-gray-400 font-light tracking-wide">123 Industrial Way<br />Reno, NV 89502</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xl text-white mb-8 tracking-widest uppercase">Service Areas</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-outlaw-accent transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-outlaw-accent/50 group-hover:text-outlaw-accent group-hover:translate-x-1 transition-all" /> Reno</a></li>
                <li><a href="#" className="text-gray-500 hover:text-outlaw-accent transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-outlaw-accent/50 group-hover:text-outlaw-accent group-hover:translate-x-1 transition-all" /> Sparks</a></li>
                <li><a href="#" className="text-gray-500 hover:text-outlaw-accent transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-outlaw-accent/50 group-hover:text-outlaw-accent group-hover:translate-x-1 transition-all" /> Carson City</a></li>
                <li><a href="#" className="text-gray-500 hover:text-outlaw-accent transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-outlaw-accent/50 group-hover:text-outlaw-accent group-hover:translate-x-1 transition-all" /> Truckee & Donner</a></li>
                <li><a href="#" className="text-gray-500 hover:text-outlaw-accent transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-outlaw-accent/50 group-hover:text-outlaw-accent group-hover:translate-x-1 transition-all" /> Fernley</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} American Outlaw. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-outlaw-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-outlaw-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
