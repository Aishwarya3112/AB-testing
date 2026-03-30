import { useState } from 'react';
import { ChevronLeft, Heart, MapPin, Clock, Package, ShieldCheck, Star } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [version, setVersion] = useState<'A' | 'B'>('B');

  return (
    <div className="max-w-md mx-auto bg-[#F9F8F6] min-h-screen pb-20 shadow-2xl relative">
      {/* AB Test Toggle - For Presentation Purposes */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-2xl border border-white flex gap-2">
        <button 
          onClick={() => setVersion('A')}
          className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${version === 'A' ? 'bg-[#4A3728] text-white' : 'text-[#4A3728]'}`}
        >
          VERSION A
        </button>
        <button 
          onClick={() => setVersion('B')}
          className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all ${version === 'B' ? 'bg-[#4A3728] text-white' : 'text-[#4A3728]'}`}
        >
          VERSION B
        </button>
      </div>

      {/* Header */}
      <header className="px-6 py-8 flex items-center justify-between">
        <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-[#F0F0F0]">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold text-[#1A1A1A]">Garden City Bakes</h1>
        <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-[#F0F0F0]">
          <Heart size={24} />
        </button>
      </header>

      {/* Hero Banner */}
      <div className="px-6 mb-8">
        <div className="relative rounded-[2.5rem] overflow-hidden h-72 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
            alt="Bakery Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {version === 'A' && (
            <div className="absolute top-6 left-6 bg-[#4A3728]/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2">
              <ShieldCheck size={14} className="text-white" />
              <span className="text-[10px] font-bold tracking-widest text-white uppercase">Verified Artisan</span>
            </div>
          )}

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div>
              <h2 className="text-5xl font-bold text-white leading-tight drop-shadow-lg">Garden City<br />Bakes</h2>
            </div>
            {version === 'A' && (
              <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-lg">
                <span className="text-sm font-bold">4.9</span>
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 grid grid-cols-3 gap-4 mb-12">
        {[
          { icon: MapPin, label: 'Distance', value: '1.8 KM' },
          { icon: Clock, label: 'Delivery', value: '40 MINS' },
          { icon: Package, label: 'Products', value: '2 ITEMS' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#D1D1D1] rounded-[2rem] p-3 flex items-center justify-center shadow-inner">
            <div className="bg-white w-full py-4 px-2 flex flex-col items-center justify-center shadow-sm">
              <stat.icon size={16} className="text-[#1A1A1A] mb-2" />
              <span className="text-[8px] font-bold tracking-widest text-[#8E8E8E] uppercase mb-1">{stat.label}</span>
              <span className="text-[10px] font-bold text-[#1A1A1A]">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="px-6 mb-12">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#F0F0F0]">
          <span className="text-[10px] font-bold tracking-widest text-[#8E8E8E] uppercase block mb-4">About the Artisan</span>
          <p className="text-lg italic text-[#5A5A5A] font-serif leading-relaxed">
            "Organic, wholesome bakes for the modern soul."
          </p>
        </div>
      </div>

      {/* Artisan Story */}
      {version === 'A' && (
        <div className="px-6 mb-12">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#F0F0F0]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-bold tracking-widest text-[#8E8E8E] uppercase">Artisan Story</span>
              <div className="bg-[#F2F1EE] px-3 py-1 rounded-full">
                <span className="text-[9px] font-bold tracking-widest text-[#5A5A5A]">5+ YEARS EXPERIENCE</span>
              </div>
            </div>
            <p className="text-[#5A5A5A] leading-relaxed mb-8 text-sm">
              Every piece in this collection is a testament to traditional craftsmanship passed down through generations. We believe in slow production and sustainable materials.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-[9px] font-bold tracking-widest text-[#8E8E8E] uppercase block mb-1">Business Type</span>
                <span className="text-xs font-bold text-[#1A1A1A] uppercase">Home-Based Business</span>
              </div>
              <div>
                <span className="text-[9px] font-bold tracking-widest text-[#8E8E8E] uppercase block mb-1">Made with care</span>
                <span className="text-xs font-bold text-[#1A1A1A] uppercase">Local Sellers</span>
              </div>
            </div>
            <button className="w-full py-4 rounded-2xl border-2 border-[#E5E5E5] text-[#1A1A1A] font-bold text-xs tracking-widest hover:bg-[#F9F8F6] transition-colors">
              REQUEST CUSTOM ORDER
            </button>
          </div>
        </div>
      )}

      {/* Menu Section */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-[#1A1A1A]">Artisan Menu</h3>
          {version === 'A' && <span className="text-[9px] font-bold tracking-widest text-[#8E8E8E] uppercase">Made with care by local sellers</span>}
        </div>

        {/* Product Cards */}
        <AnimatePresence mode="wait">
          {version === 'A' ? (
            <motion.div
              key="version-a"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProductCard 
                name="Artisan Coffee Beans"
                description="Freshly roasted local coffee beans."
                price={650}
                image="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop"
                tags={["MADE IN BANGALORE"]}
                labels={["FRESHLY ROASTED", "ARTISANAL", "LOCAL", "FRESH & HOME MADE"]}
                isVeg={true}
                isReadyForPickup={true}
              />
              <ProductCard 
                name="Whole Wheat Sourdough"
                description="Healthy and hearty whole wheat bread."
                price={300}
                image="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                tags={["MADE IN BANGALORE"]}
                labels={["FRESHLY BAKED", "ORGANIC", "HEALTHY", "FRESH & HOME MADE"]}
                isVeg={true}
                isReadyForPickup={true}
              />
            </motion.div>
          ) : (
            <motion.div
              key="version-b"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ProductCard 
                name="Artisan Coffee Beans"
                description="Freshly roasted local coffee beans."
                price={650}
                image="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop"
                tags={[]}
                labels={[]}
                isVeg={false}
                isReadyForPickup={false}
              />
              <ProductCard 
                name="Whole Wheat Sourdough"
                description="Healthy and hearty whole wheat bread."
                price={300}
                image="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                tags={[]}
                labels={[]}
                isVeg={false}
                isReadyForPickup={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
