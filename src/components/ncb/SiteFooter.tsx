import ncbEmblem from "@/assets/ncb-emblem.png";

const cols = [
  { title: "About NCB", items: ["Who We Are", "Origin & Evolution", "Mission, Vision & Motto", "Hierarchy & Structure", "Our Offices", "Our Partners"] },
  { title: "Legal & Notifications", items: ["Notifications", "Important Judgements", "Acts & Rules", "Treaties", "Publications", "NDPS Courts"] },
  { title: "Media & News", items: ["Latest News & Events", "Important Seizures", "Photo Gallery", "Video Gallery", "Press Releases", "Former Heads"] },
  { title: "Citizen Services", items: ["Submit Tip", "MANAS 1933", "RTI & Vigilance", "E-Pledge", "Tenders", "Join NCB", "Public Grievance"] },
];

const bottomLinks = ["Website Policies", "Privacy Policy", "Accessibility Statement", "Sitemap", "Help", "Feedback"];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">Site footer</h2>

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 flex items-center gap-4 border-b border-white/10">
        <img src={ncbEmblem} alt="" className="h-14 w-auto" />
        <div>
          <p className="text-base font-bold">Narcotics Control Bureau</p>
          <p className="text-xs text-navy-foreground/70">Ministry of Home Affairs, Government of India</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-saffron">{c.title}</h3>
            <ul className="mt-3 space-y-2">
              {c.items.map((it) => (
                <li key={it}>
                  <a href="#" className="text-sm text-navy-foreground/80 hover:text-navy-foreground hover:underline">
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-saffron">Contact</h3>
          <address className="mt-3 not-italic text-sm text-navy-foreground/80 space-y-1.5">
            <p>Address Placeholder, New Delhi, India</p>
            <p>Phone: Placeholder</p>
            <p>MANAS Helpline: <a href="tel:1933" className="font-semibold text-saffron">1933</a></p>
            <p>Email: <span className="text-navy-foreground/70">placeholder@ncb.gov.in</span></p>
            <p><a href="#" className="hover:underline">Office Locator →</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-wrap items-center justify-between gap-4 text-xs text-navy-foreground/75">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {bottomLinks.map((l) => (
              <li key={l}><a href="#" className="hover:underline">{l}</a></li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Last Updated: 07 May 2026</span>
            <span>Visitors: <span className="font-semibold text-navy-foreground">CMS Placeholder</span></span>
          </div>
        </div>
        <div className="bg-strip">
          <p className="mx-auto max-w-7xl px-4 py-3 text-xs text-strip-foreground/80 text-center">
            © Narcotics Control Bureau, Ministry of Home Affairs, Government of India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
