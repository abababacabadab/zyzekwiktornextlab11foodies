// app/layout.js
import './globals.css';
import './styles/layout.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
