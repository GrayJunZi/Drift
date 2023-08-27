import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <footer>Copyright &copy; 2023</footer>
  </div>;
}
