import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2 py-0.5 md:px-2.5 md:py-1 text-sm bg-stone-300 hover:bg-stone-400',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 px-4 py-2.5 sm:px-6 sm:py-3.5 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
