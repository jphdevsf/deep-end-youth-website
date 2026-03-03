export default function Footer() {
  return (
    <footer className="bg-black-trans p-4">
      <div className="block h-6 md:h-4 text-center text-white text-xs flex flex-row justify-center items-center">
        <span>
          {'© '}
          <span id="footer-copyright">{new Date().getFullYear()}</span>
          {' Deep End Youth '}
        </span>
        <span className="text-lg">&nbsp;&nbsp;&nbsp;</span>
        <a
          className="social ml-1"
          href="https://www.facebook.com/profile.php?id=100094076713054"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/facebook.svg" alt="Facebook" className="inline" />
        </a>
      </div>
    </footer>
  )
}
