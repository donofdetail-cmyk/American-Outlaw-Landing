import { Phone, MapPin, Truck, Wrench, Clock, ShieldCheck, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

export default function App() {
  const phoneNumber = "775-555-0199";
  const phoneLink = "tel:+17755550199";

  return (
    <div className="min-h-screen font-body selection:bg-outlaw-accent selection:text-white flex flex-col">
      
      {/* Top Bar (Very top, small) */}
      <div className="bg-outlaw-bg text-gray-300 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-outlaw-accent" /> 24/7 Emergency Dispatch</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-outlaw-accent" /> Serving Reno, Sparks & Donner Pass</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Licensed & Bonded</span>
            <span className="text-outlaw-accent font-bold">ETA: ~30-45 Mins</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-outlaw-bg flex items-center justify-center rounded shadow-sm">
               <span className="font-heading text-2xl text-white leading-none mt-1">AO</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-heading text-3xl leading-none m-0 p-0 text-gray-900 tracking-tight">AMERICAN OUTLAW</h1>
              <span className="text-[11px] uppercase tracking-widest text-outlaw-accent font-bold">Towing & Emergency Services</span>
            </div>
          </div>
          
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
            <a href="#" className="hover:text-outlaw-accent transition-colors">Home</a>
            <a href="#" className="hover:text-outlaw-accent transition-colors">About Us</a>
            <a href="#" className="hover:text-outlaw-accent transition-colors">Services</a>
            <a href="#" className="hover:text-outlaw-accent transition-colors">Service Area</a>
          </nav>

          {/* CTA Button */}
          <a 
            href={phoneLink}
            className="bg-outlaw-accent hover:bg-outlaw-accent-hover text-white px-6 py-3 md:px-8 md:py-4 rounded flex items-center gap-3 font-heading text-lg md:text-xl uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden sm:inline">{phoneNumber}</span>
            <span className="sm:hidden">CALL NOW</span>
          </a>
        </div>
      </header>

      {/* Hero Section (Split Layout) */}
      <section className="relative bg-outlaw-bg pt-16 pb-48 lg:pt-24 lg:pb-56 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-block bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
                Welcome to American Outlaw
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6 leading-[1.05]">
                Let's get the <br />
                <span className="text-outlaw-accent">towing truck</span> moving.
              </h2>
              <p className="text-lg text-gray-300 mb-8 font-medium leading-relaxed max-w-lg">
                Stranded on I-80 or overheating in the desert? We provide rapid, heavy-duty recovery and 24/7 roadside assistance across Northern Nevada.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#book" className="bg-outlaw-accent hover:bg-outlaw-accent-hover text-white px-8 py-4 rounded font-heading text-lg uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                  Request a Tow <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-outlaw-bg px-8 py-4 rounded font-heading text-lg uppercase tracking-wider transition-colors">
                  Our Services
                </a>
              </div>
            </div>

            {/* Right Image (Truck) */}
            <div className="hidden lg:block relative">
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-outlaw-accent/20 rounded-full blur-3xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1605665793444-118029012435?q=80&w=1200&auto=format&fit=crop" 
                alt="Heavy Duty Tow Truck" 
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
          <div className="bg-outlaw-accent p-8 md:p-10 flex flex-col justify-center items-center text-center text-white border-t-4 border-outlaw-accent-hover">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Phone className="w-8 h-8 text-outlaw-accent" />
            </div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-2 opacity-90">24/7 Emergency Towing</h4>
            <a href={phoneLink} className="text-4xl md:text-5xl font-heading font-bold hover:scale-105 transition-transform">
              {phoneNumber}
            </a>
            <p className="mt-4 text-sm font-medium opacity-90">Call now for immediate dispatch.</p>
          </div>

        </div>
      </div>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image with Badge */}
            <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=1000&auto=format&fit=crop" 
                alt="Tow truck operator" 
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 shadow-2xl rounded-lg border-l-4 border-outlaw-accent max-w-[200px]">
                <div className="text-outlaw-accent mb-2">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h4 className="font-heading text-3xl text-gray-900 leading-none mb-1">24/7</h4>
                <p className="text-gray-600 font-bold text-sm uppercase tracking-wide">Towing Service</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-outlaw-accent"></div>
                <h4 className="text-outlaw-accent font-bold tracking-widest uppercase text-sm">About Us</h4>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6 leading-tight">
                A little care for your <br/> great problems.
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                American Outlaw Towing isn't your average hook-and-chain operation. We specialize in the tough jobs—the ones other companies walk away from. Whether you're stuck in a snowbank on Donner Pass or stranded in the high desert heat, we have the heavy iron and the grit to get you home.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-outlaw-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Rapid Response Times</strong>
                    <span className="text-gray-600 text-sm">Average 45-minute ETA in the Greater Reno area.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-outlaw-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Honest, Upfront Pricing</strong>
                    <span className="text-gray-600 text-sm">No hidden fees. You know the cost before we hook up.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-outlaw-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Heavy Duty Capable</strong>
                    <span className="text-gray-600 text-sm">Equipped for 4x4 off-road recovery and commercial rigs.</span>
                  </div>
                </li>
              </ul>

              <a href="#services" className="inline-flex items-center gap-2 text-outlaw-accent font-bold uppercase tracking-wider hover:text-outlaw-bg transition-colors">
                Discover More <ChevronRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-outlaw-accent"></div>
              <h4 className="text-outlaw-accent font-bold tracking-widest uppercase text-sm">Our Services</h4>
              <div className="w-8 h-1 bg-outlaw-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6">Built for Nevada's Worst</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white shadow-sm rounded flex items-center justify-center mb-6 group-hover:bg-outlaw-accent transition-colors">
                <Truck className="w-8 h-8 text-outlaw-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading text-gray-900 mb-3">The Pass & Winter Ops</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Specialized in Donner Pass recoveries, severe snow extraction, and chain-up rescues. We pull you out of the worst Sierra storms.
              </p>
              <a href={phoneLink} className="text-outlaw-accent font-bold uppercase text-sm tracking-wider flex items-center gap-1 group-hover:text-gray-900">
                Call Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white shadow-sm rounded flex items-center justify-center mb-6 group-hover:bg-outlaw-accent transition-colors">
                <MapPin className="w-8 h-8 text-outlaw-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading text-gray-900 mb-3">Desert & Highway</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Blown tires on HWY 395 or overheating engines on the 580. From long-distance hauls to dead batteries at casino parking garages.
              </p>
              <a href={phoneLink} className="text-outlaw-accent font-bold uppercase text-sm tracking-wider flex items-center gap-1 group-hover:text-gray-900">
                Call Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white shadow-sm rounded flex items-center justify-center mb-6 group-hover:bg-outlaw-accent transition-colors">
                <Wrench className="w-8 h-8 text-outlaw-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading text-gray-900 mb-3">Off-Road & Specialty</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stuck deep in BLM land? Our 4x4 winch-out teams specialize in sand, mud, and ditch recoveries. Secure motorcycle towing available.
              </p>
              <a href={phoneLink} className="text-outlaw-accent font-bold uppercase text-sm tracking-wider flex items-center gap-1 group-hover:text-gray-900">
                Call Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-outlaw-bg py-16 border-b-4 border-outlaw-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-2">Need a tow right now?</h2>
            <p className="text-gray-400 text-lg">Our dispatchers are standing by 24/7/365.</p>
          </div>
          <a 
            href={phoneLink}
            className="bg-outlaw-accent hover:bg-outlaw-accent-hover text-white px-8 py-4 rounded flex items-center gap-3 font-heading text-xl uppercase tracking-wide transition-colors whitespace-nowrap"
          >
            <Phone className="w-6 h-6" />
            {phoneNumber}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] pt-16 pb-8 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white text-outlaw-bg rounded flex items-center justify-center">
                  <span className="font-heading text-xl leading-none mt-1">AO</span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl leading-none m-0 p-0 text-white tracking-tight">AMERICAN OUTLAW</h3>
                </div>
              </div>
              <p className="max-w-sm mb-6">
                Professional, reliable, and no-nonsense towing and recovery services for Northern Nevada. We fight back when the road fights you.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-outlaw-accent transition-colors cursor-pointer">
                  <span className="font-bold text-white">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-outlaw-accent transition-colors cursor-pointer">
                  <span className="font-bold text-white">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-xl text-white mb-6 tracking-wide">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-outlaw-accent shrink-0" />
                  <div>
                    <span className="block text-sm text-gray-500 uppercase font-bold">24/7 Dispatch</span>
                    <a href={phoneLink} className="text-white hover:text-outlaw-accent transition-colors">{phoneNumber}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-outlaw-accent shrink-0" />
                  <div>
                    <span className="block text-sm text-gray-500 uppercase font-bold">Location</span>
                    <span className="text-white">123 Industrial Way<br/>Reno, NV 89502</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xl text-white mb-6 tracking-wide">Service Areas</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-outlaw-accent transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-outlaw-accent" /> Reno</a></li>
                <li><a href="#" className="hover:text-outlaw-accent transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-outlaw-accent" /> Sparks</a></li>
                <li><a href="#" className="hover:text-outlaw-accent transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-outlaw-accent" /> Carson City</a></li>
                <li><a href="#" className="hover:text-outlaw-accent transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-outlaw-accent" /> Truckee & Donner Pass</a></li>
                <li><a href="#" className="hover:text-outlaw-accent transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-outlaw-accent" /> Fernley</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} American Outlaw Towing. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
