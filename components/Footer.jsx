import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary border-t border-white/10 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-white/60">
            © {currentYear} Alexej Krasnokutskij. All rights reserved.
          </div>
          
          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <Link 
              href="/privacy" 
              className="text-white/60 hover:text-accent transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link 
              href="/imprint" 
              className="text-white/60 hover:text-accent transition-all duration-300"
            >
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}