import './globals.css';

export const metadata = {
  title: 'Ryan Febrianto | Portfolio',
  description:
    'Portfolio of Ryan Febrianto — IT practitioner focused on Data Analytics, building intelligent web applications using Python and Streamlit.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-[#0f172a] text-slate-100 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
