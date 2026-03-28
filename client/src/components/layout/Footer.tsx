import { Link } from "wouter";
import logo from "@/assets/images/logo.jfif";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          <div>
            <Link href="/" className="flex items-center gap-4 mb-8">
               <img src={logo} alt="TCE & Associates Logo" className="h-12 w-auto object-contain" />
               <div className="flex flex-col">
                 <span className="font-display text-base font-bold text-primary tracking-tight">TCE & ASSOCIATES</span>
                 <span className="text-[9px] text-accent font-bold tracking-widest uppercase">Limited</span>
               </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              UK-registered company delivering reliable, accurate and legally compliant Bengali to English translation and interpreting services across the United Kingdom.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-primary uppercase tracking-widest mb-8 border-b-2 border-secondary inline-block pb-1">Legal Standards</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Certified Translation</li>
              <li>Immigration Documentation</li>
              <li>Court Interpreting</li>
              <li>Academic Transcripts</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-primary uppercase tracking-widest mb-8 border-b-2 border-secondary inline-block pb-1">Professional</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-secondary font-bold">●</span>
                <span>Member of CIOL (MCIL)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary font-bold">●</span>
                <span>LL.B (Hons), LL.M (UK)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary font-bold">●</span>
                <span>UK Registered Company</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} TCE & Associates Limited. Registered in England & Wales.
          </p>
          <div className="flex gap-8 text-[11px] font-bold text-primary uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">CIOL Ethics</a>
            <a
              href="https://www.facebook.com/share/1CBkoVjwYK/?mibextid=wwXIfr"
              className="hover:text-accent transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                alt="Facebook"
                className="h-5 w-5 object-contain"
              />
              <span className="text-[11px]">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
