import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ShieldCheck, FileText, Languages, CheckCircle2, Award, Scale, Mail, Phone, MapPin, MessageCircle, Globe } from "lucide-react";
import tanvirImage from "@/assets/images/tanvir.jfif";

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Unable to send message");
      }

      toast({
        title: "Message sent",
        description: result.message || "Your inquiry has been delivered.",
      });
      setContactForm({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Send failed",
        description:
          error?.message ||
          "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (field: keyof typeof contactForm, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[80vh] bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* using object-contain to ensure the entire CIOL logo is visible
              even if it means letterboxing within the hero section */}
          <img
            src="https://www.ciol.org.uk/sites/default/files/Jubilee%20Crest.png"
            alt="CIOL logo background"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-in fade-in duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/30 text-secondary mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">CIOL Member | UK Registered Company</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Certified Bengali to English <br/>
              <span className="text-secondary">Translation Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-normal leading-relaxed">
              Legal Specialist Providing Accurate, Confidential, and Professionally Certified Translations for Immigration, Court, and Official Use Across the United Kingdom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-none h-14 px-8 font-bold uppercase tracking-wider">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-none h-14 px-8 font-bold uppercase tracking-wider">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ABOUT / AIM */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-display text-3xl mb-6 border-l-4 border-secondary pl-4">Reliable & Legally Compliant</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                TCE & Associates Limited is a UK-registered company dedicated to delivering reliable, accurate and legally compliant translation and interpreting services.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our purpose is to assist individuals, families and businesses with official documentation required by UK authorities, including the Home Office, courts, solicitors and educational institutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Home Office", icon: ShieldCheck },
                { title: "Courts & Justice", icon: Scale },
                { title: "Solicitors", icon: FileText },
                { title: "Academic", icon: Award }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 bg-muted flex flex-col items-center text-center hover:border-secondary transition-colors">
                  <item.icon className="h-10 w-10 text-secondary mb-4" />
                  <span className="font-display font-bold text-sm tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONY / PROFILE */}
      <section id="about" className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Director's Testimony</h2>
              <h3 className="text-3xl md:text-4xl font-display text-primary mb-8 leading-tight">Expert Legal Linguistics & Professional Integrity</h3>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  I am a UK-based legal linguist and Director of TCE & Associates Limited. As a Full Member (MCIL) of The Chartered Institute of Linguists, I provide certified Bengali to English translation and professional interpreting services across the United Kingdom.
                </p>
                <p>
                  With an LL.B (Hons) and LL.M (UK), I specialise in legal and immigration documentation. My work is guided by accuracy, confidentiality, neutrality and professional integrity. Every document is carefully reviewed to meet UK legal and official standards.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="font-display font-bold text-black text-2xl md:text-3xl">
                  Tanvir Chowdhury Emad
                </p>
                <p className="text-sm uppercase tracking-widest text-black font-bold">
                  LL.B (Hons), LL.M (UK), MCIL
                </p>
                <p className="text-sm text-black mt-2">
                  Director – TCE & Associates Limited
                </p>
                <p className="text-sm text-black">
                  Company No: 17058229
                </p>
                <p className="text-sm text-black mt-4">
                  Member of The Chartered Institute of Linguists (MCIL)
                </p>
                <p className="text-sm text-black">
                  CIOL number: 96489
                </p>
                <p className="text-sm text-black">
                  <a
                    href="http://www.ciol.org.uk/96489"
                    className="text-secondary hover:underline"
                  >
                    http://www.ciol.org.uk/96489
                  </a>
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative p-4 border border-secondary/20">
                <img 
                  src={tanvirImage} 
                  alt="Tanvir Chowdhury Emad" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Professional Standards</h2>
            <h3 className="text-3xl md:text-4xl font-display text-primary mb-6">Our Commitment</h3>
            <p className="text-muted-foreground">Maintaining high professional standards, strict confidentiality and precise legal terminology in every assignment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Certified Translation", icon: CheckCircle2, desc: "Officially accepted translations for the Home Office, courts, and UK authorities." },
              { title: "Legal Specialisation", icon: Scale, desc: "Deep understanding of legal terminology with LL.B and LL.M background." },
              { title: "Confidentiality", icon: ShieldCheck, desc: "Strict adherence to data protection and professional ethics (MCIL standard)." }
            ].map((service, i) => (
              <div key={i} className="p-10 border border-gray-100 hover:border-secondary transition-colors bg-white">
                <service.icon className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
                <h4 className="text-xl font-display font-bold text-primary mb-4">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Accreditations</h2>
            <h3 className="text-3xl font-display text-primary mb-6">Professional Certifications</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { title: "Chartered Institute of Linguists (MCIL)", icon: Award },
              { title: "LL.B (Hons)", icon: FileText },
              { title: "LL.M (UK)", icon: FileText },
              { title: "Commissioner for Oaths", icon: Scale },
              { title: "UK Registered Company", icon: Globe },
              { title: "Data Protection Registered", icon: ShieldCheck },
              { title: "Professional Indemnity Insured", icon: ShieldCheck }
            ].map((cert, i) => (
              <div
                key={i}
                className="border border-gray-100 p-6 bg-muted/30 aspect-square flex flex-col items-center justify-center text-center group hover:border-secondary transition-colors"
              >
                <cert.icon className="h-8 w-8 text-secondary mb-2" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-tighter text-primary/70 group-hover:text-secondary transition-colors">
                  {cert.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
              <h3 className="text-3xl font-display mb-8">Ready to assist with your documentation</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/50">Email</p>
                    <p className="text-lg font-medium">info@tceassocs.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/50">WhatsApp Business</p>
                    <p className="text-lg font-medium">
                      <a
                        href="https://wa.me/447949222201"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +447949222201
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/50">Address</p>
                    <p className="text-lg font-medium">77 Haig Road, London E13 9LJ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 text-primary">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Full Name</label>
                    <Input
                      value={contactForm.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      className="rounded-none border-gray-200 focus:border-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
                    <Input
                      type="email"
                      value={contactForm.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      className="rounded-none border-gray-200 focus:border-secondary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Subject</label>
                  <Input
                    value={contactForm.subject}
                    onChange={(event) => handleChange("subject", event.target.value)}
                    className="rounded-none border-gray-200 focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                  <Textarea
                    value={contactForm.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    className="rounded-none border-gray-200 focus:border-secondary min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-accent text-white hover:bg-accent/90 rounded-none h-14 font-bold uppercase tracking-widest"
                >
                  {isSending ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
