import React from 'react';
export default function Gottaprintem() {
  const shopUrl = 'https://linktr.ee/gottaprintem';
  const galleryData = [
    { src: '/assets/og-image.png', caption: 'Custom figure sample', postUrl: 'https://www.instagram.com/gottaprintem/' },
    { src: '/assets/logo-mark.svg', caption: 'Painted finish', postUrl: 'https://www.instagram.com/gottaprintem/' },
  ];

  const openShop = () => window.open(shopUrl, '_blank');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 font-sans">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo-mark.svg" alt="Gottaprintem" className="w-14 h-14" />
          <div>
            <div className="font-extrabold text-lg">Gottaprintem</div>
            <div className="text-sm text-slate-400">Custom 3D prints • Collectibles • Commissions</div>
          </div>
        </div>
        <nav className="flex gap-4 text-slate-300">
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-start">
        <section>
          <h1 className="text-4xl font-extrabold leading-tight">Custom 3D prints and collectible figures.<br /><span className="text-cyan-300">Made with care in Puerto Rico.</span></h1>
          <p className="mt-4 text-slate-300">Figures, charms, wall plaques, and toys — commissions welcome.</p>
          <div className="mt-6 flex gap-3">
            <button onClick={openShop} className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-bold">Visit Shop</button>
            <a href="#contact" className="px-4 py-2 border rounded-lg text-slate-300">Request a Quote</a>
          </div>
        </section>

        <aside className="bg-slate-900 p-6 rounded-lg">
          <div className="font-semibold mb-3">Featured on Instagram</div>
          <a href="https://www.instagram.com/gottaprintem/" target="_blank" rel="noreferrer" className="block bg-slate-800 p-4 rounded">@gottaprintem</a>
          <div className="mt-4 flex gap-3">
            <a href={shopUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded text-slate-300">Visit Shop</a>
            <a href="#contact" className="px-4 py-2 border rounded text-slate-300">DM on Instagram</a>
          </div>
        </aside>

        <section id="gallery" className="md:col-span-2">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryData.map((g, i) => (
              <a key={i} href={g.postUrl} target="_blank" rel="noreferrer" className="block bg-slate-900 rounded overflow-hidden">
                <img src={g.src} alt={g.caption} className="w-full h-40 object-cover transform hover:scale-105 transition" />
                <div className="p-2 text-sm text-slate-400">{g.caption}</div>
              </a>
            ))}
          </div>
        </section>

        <section id="shop" className="md:col-span-2 bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Shop & Commissions</h3>
          <p className="text-slate-400">Find ready items or request a custom commission. Local pickup available in Puerto Rico; shipping worldwide.</p>
          <div className="mt-4 flex gap-3">
            <a href={shopUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-cyan-400 rounded font-bold text-slate-900">Go to Shop</a>
            <a href="#contact" className="px-4 py-2 border rounded text-slate-300">Commission Form</a>
          </div>
        </section>

        <section id="contact" className="md:col-span-2 bg-slate-900 p-6 rounded-lg grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Contact & Request Form</h4>
            <form action="mailto:youremail@domain.com" method="post" encType="text/plain" className="mt-3 space-y-3">
              <input name="name" placeholder="Your name" className="w-full p-2 rounded bg-slate-800" />
              <input name="email" placeholder="Email" className="w-full p-2 rounded bg-slate-800" />
              <input name="title" placeholder="Project title" className="w-full p-2 rounded bg-slate-800" />
              <textarea name="details" placeholder="Details, size, finish" className="w-full p-2 rounded bg-slate-800" rows={4}></textarea>
              <div className="flex gap-2">
                <button type="submit" className="px-4 py-2 bg-cyan-400 rounded font-bold text-slate-900">Send Request</button>
                <a href="mailto:youremail@domain.com" className="px-4 py-2 border rounded text-slate-300">Email instead</a>
              </div>
            </form>
          </div>

          <div>
            <h5 className="font-semibold">Business info</h5>
            <p className="text-slate-400">Instagram: <a className="text-cyan-300" href="https://www.instagram.com/gottaprintem/">@gottaprintem</a></p>
            <p className="text-slate-400">Shop: <a className="text-cyan-300" href="https://linktr.ee/gottaprintem">Linktree / Etsy</a></p>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto p-6 text-slate-500 text-sm">© Gottaprintem — 3D prints & collectibles</footer>
    </div>
  );
}