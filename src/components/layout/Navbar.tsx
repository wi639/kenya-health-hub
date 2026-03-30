import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Booking', href: '#booking' },
    { name: 'Health Blog', href: '#blog' },
    { name: 'Insurance', href: '#insurance' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-gray-100' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              "text-2xl font-bold tracking-tight",
              "text-blue-900"
            )}>
              Afya<span className="text-emerald-600">Care</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:999">
              <Button variant="outline" size="sm" className="flex items-center gap-2 border-red-500 text-red-500 hover:bg-red-50">
                <Phone className="h-4 w-4" />
                Emergency: 999
              </Button>
            </a>
            <a href="#booking">
              <Button className="flex items-center gap-2 shadow-blue-200 shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="grid grid-cols-1 gap-3 pt-4 border-t border-gray-100">
            <Button variant="destructive" className="w-full flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Emergency: 999
            </Button>
            <Button className="w-full bg-blue-600 text-white">Book Appointment</Button>
          </div>
        </div>
      )}
    </nav>
  );
};