import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

const categories = [
  { label: 'Cakes', href: '/menu?category=cakes' },
  { label: 'Cupcakes', href: '/menu?category=cupcakes' },
  { label: 'Ice Cream', href: '/menu?category=ice-cream' },
  { label: 'Smoothies', href: '/menu?category=smoothies' },
  { label: 'Pastries', href: '/menu?category=pastries' },
];

export default function Footer() {
  return (
    <footer className="bg-hive text-cream/80" id="contact">
      {/* Honey top border */}
      <div className="h-1 bg-gradient-to-r from-honey via-gold to-honey" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/brand/hives_logo.jpeg"
                alt="Hives Pastries"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-cream text-xl">
                Hives Pastries
              </span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              Delicious cakes, pastries, smoothies, ice cream &amp; more.
              Made fresh daily in the heart of Thika.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/hive_pastries/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-honey hover:text-hive transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com/hivepastries/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-honey hover:text-hive transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@the_hive_pastries"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-honey hover:text-hive transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-honey transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-heading font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Our Menu
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    className="text-sm text-cream/60 hover:text-honey transition-colors duration-200"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Visit the Hive
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={18} className="text-honey flex-shrink-0 mt-0.5" />
                <span>Biashara Plaza, B6<br />Next to Naivas Bld.<br />Thika Town</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock size={18} className="text-honey flex-shrink-0 mt-0.5" />
                <div>
                  <span>Mon – Sat: 8 AM – 8 PM</span><br />
                  <span>Sunday: 9 AM – 8 PM</span>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={18} className="text-honey flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+254759837429" className="hover:text-honey transition-colors">0759 837 429</a><br />
                  <a href="tel:+254746354053" className="hover:text-honey transition-colors">0746 354 053</a>
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/254759837429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#1fb855] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Hives Pastries. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            Made with care in Thika
          </p>
        </div>
      </div>
    </footer>
  );
}
